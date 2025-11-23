import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle, X, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { z } from 'zod';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Willkommen! Ich leite Ihre Nachricht direkt an unser Team weiter. Ein Teammitglied wird Ihnen in Kürze antworten.',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Validate message with Zod
    const messageSchema = z.object({
      message: z.string().trim().min(1).max(5000),
      userName: z.string().trim().max(100).optional()
    });

    try {
      const validatedData = messageSchema.parse({
        message: inputValue,
        userName: 'Website Visitor'
      });

      const userMessage: Message = {
        id: Date.now().toString(),
        text: validatedData.message,
        isBot: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Send message to Matrix
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke('matrix-chat', {
        body: validatedData
      });

      if (error) {
        if (import.meta.env.DEV) {
          console.error('Error sending to Matrix:', error);
        }
      }

      // Confirmation message
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Ihre Nachricht wurde an unser Team weitergeleitet. Wir melden uns in Kürze bei Ihnen.',
          isBot: true,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error in chat:', error);
      }
      
      // Error message
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.',
          isBot: true,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <img 
              src="/lovable-uploads/789c8c26-f14d-4294-91cc-1ecc2d6fe5fb.png" 
              alt="Chatbot" 
              width="512"
              height="512"
              className="h-8 w-8 object-contain"
            />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Card className="w-96 h-[600px] shadow-2xl border border-primary/20 bg-card">
            <CardHeader className="pb-3 bg-primary/5 border-b border-primary/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/789c8c26-f14d-4294-91cc-1ecc2d6fe5fb.png" 
                      alt="Bot Avatar" 
                      width="512"
                      height="512"
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-raleway text-foreground">
                      botti.co Assistant
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {t('chatbot.subtitle')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 h-[calc(100%-140px)] flex flex-col">
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`px-4 py-2 rounded-lg font-raleway text-sm ${
                            message.isBot
                              ? 'bg-primary/10 text-foreground border border-primary/20'
                              : 'bg-primary text-primary-foreground'
                          }`}
                        >
                          {message.text}
                        </div>
                        <div className={`text-xs text-muted-foreground mt-1 ${
                          message.isBot ? 'text-left' : 'text-right'
                        }`}>
                          {message.timestamp.toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                      {message.isBot && (
                        <div className="order-1 mr-2 mt-1">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Bot className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="order-1 mr-2 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-3 w-3 text-primary" />
                        </div>
                      </div>
                      <div className="order-2 max-w-[80%]">
                        <div className="px-4 py-2 rounded-lg bg-primary/10 text-foreground border border-primary/20">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('chatbot.placeholder')}
                    className="flex-1 font-raleway"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;