import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle, X, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your intelligent automation agent from botti.co. How can I help you today with optimizing your business processes?',
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

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('automation') || input.includes('automate')) {
      return 'Automation is our specialty! We can help you in various areas: Sales & Marketing, Finance & Accounting, HR & Recruiting, E-Commerce and Business Intelligence. In which area do you see the greatest potential?';
    }
    
    if (input.includes('cost') || input.includes('price') || input.includes('budget')) {
      return 'The costs for automation solutions vary depending on complexity and scope. We would be happy to create an individual offer for you. Can you tell me more about your company and your specific requirements?';
    }
    
    if (input.includes('crm') || input.includes('sales') || input.includes('marketing')) {
      return 'Perfect! Our sales & marketing automation includes email automation, lead nurturing funnels, CRM automation and chatbots. This allows you to systematically turn prospects into customers - 24/7 and data-driven. Which aspect interests you most?';
    }
    
    if (input.includes('finance') || input.includes('accounting') || input.includes('invoice')) {
      return 'Our finance & accounting automation ensures fewer errors and more overview. We automate document recognition, invoicing, bank reconciliation and tax preparation. Would you like to learn more about a specific area?';
    }
    
    if (input.includes('hr') || input.includes('recruiting') || input.includes('personnel')) {
      return 'HR automation brings speed and structure to your personnel processes. From automated candidate pre-selection to appointment scheduling to onboarding - we digitize your entire HR process. Where do you see the greatest need for action?';
    }
    
    if (input.includes('ecommerce') || input.includes('shop') || input.includes('online')) {
      return 'E-commerce automation is our silent back office for you! Inventory synchronization, shipping processing, payment reconciliation and product feed automation run around the clock. Which part of your e-commerce process would you like to optimize?';
    }
    
    if (input.includes('reporting') || input.includes('dashboard') || input.includes('kpi')) {
      return 'With Business Intelligence & Reporting you have all important KPIs at a glance. We create automated dashboards, aggregate data from multiple tools and set up early warning systems. Which metrics are particularly important to you?';
    }
    
    if (input.includes('workflow') || input.includes('process') || input.includes('approval')) {
      return 'Workflow automation makes your internal processes more efficient. Approval processes, ticketing, document management and internal communication run standardized and traceable. Which processes are currently giving you headaches?';
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('good day')) {
      return 'Hello! Nice to have you here. I would be happy to help you find the right automation solutions for your company. What is currently occupying you most in your business processes?';
    }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return 'You are very welcome! If you have any further questions or would like a non-binding consultation, I am here for you at any time. Together we will find the perfect automation solution for your company.';
    }
    
    // Default response
    return 'That is an interesting question! Automation can help in many areas - from sales to finance to HR processes. Can you give me more details about your specific concern? This way I can help you more specifically.';
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
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-raleway text-foreground">
                      botti.co Assistant
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      Your smart automation agent
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
                    placeholder="Write your message..."
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