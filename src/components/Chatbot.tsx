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
      text: 'Hallo! Ich bin Ihr intelligenter Automatisierungs-Agent von botti.co. Wie kann ich Ihnen heute bei der Optimierung Ihrer Geschäftsprozesse helfen?',
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
    
    if (input.includes('automatisierung') || input.includes('automatisieren')) {
      return 'Automatisierung ist unsere Spezialität! Wir können Ihnen in verschiedenen Bereichen helfen: Vertrieb & Marketing, Finanzen & Buchhaltung, HR & Recruiting, E-Commerce und Business Intelligence. In welchem Bereich sehen Sie das größte Potenzial?';
    }
    
    if (input.includes('kosten') || input.includes('preis') || input.includes('budget')) {
      return 'Die Kosten für Automatisierungslösungen variieren je nach Komplexität und Umfang. Gerne erstellen wir Ihnen ein individuelles Angebot. Können Sie mir mehr über Ihr Unternehmen und Ihre spezifischen Anforderungen erzählen?';
    }
    
    if (input.includes('crm') || input.includes('vertrieb') || input.includes('marketing')) {
      return 'Perfekt! Unsere Vertriebs- & Marketingautomatisierung umfasst E-Mail-Automatisierung, Lead-Nurturing-Funnels, CRM-Automatisierungen und Chatbots. Damit können Sie aus Interessenten systematisch Kunden machen - 24/7 und datenbasiert. Welcher Aspekt interessiert Sie am meisten?';
    }
    
    if (input.includes('finanzen') || input.includes('buchhaltung') || input.includes('rechnung')) {
      return 'Unsere Finanz- & Buchhaltungsautomatisierung sorgt für weniger Fehler und mehr Übersicht. Wir automatisieren Belegerkennung, Rechnungsstellung, Bankabgleiche und Steuer-Vorbereitung. Möchten Sie mehr über einen spezifischen Bereich erfahren?';
    }
    
    if (input.includes('hr') || input.includes('personal') || input.includes('recruiting')) {
      return 'HR-Automatisierung bringt Tempo und Struktur in Ihre Personalprozesse. Von automatisierter Bewerbervorauswahl über Terminvereinbarungen bis hin zum Onboarding - wir digitalisieren Ihren gesamten HR-Prozess. Wo sehen Sie den größten Handlungsbedarf?';
    }
    
    if (input.includes('ecommerce') || input.includes('shop') || input.includes('online')) {
      return 'E-Commerce-Automatisierung ist unser stilles Backoffice für Sie! Bestandsabgleich, Versandabwicklung, Zahlungsabgleich und Produktfeed-Automatisierung laufen rund um die Uhr. Welchen Teil Ihres E-Commerce-Prozesses möchten Sie optimieren?';
    }
    
    if (input.includes('reporting') || input.includes('dashboard') || input.includes('kpi')) {
      return 'Mit Business Intelligence & Reporting haben Sie alle wichtigen KPIs auf einem Blick. Wir erstellen automatisierte Dashboards, aggregieren Daten aus mehreren Tools und richten Frühwarnsysteme ein. Welche Kennzahlen sind für Sie besonders wichtig?';
    }
    
    if (input.includes('workflow') || input.includes('prozess') || input.includes('genehmigung')) {
      return 'Workflow-Automatisierung macht Ihre internen Prozesse effizienter. Genehmigungsprozesse, Ticketing, Dokumentenmanagement und interne Kommunikation laufen standardisiert und nachvollziehbar ab. Welche Prozesse bereiten Ihnen aktuell Kopfzerbrechen?';
    }
    
    if (input.includes('hallo') || input.includes('hi') || input.includes('guten tag')) {
      return 'Hallo! Schön, dass Sie da sind. Ich helfe Ihnen gerne dabei, die passenden Automatisierungslösungen für Ihr Unternehmen zu finden. Was beschäftigt Sie aktuell am meisten in Ihren Geschäftsprozessen?';
    }
    
    if (input.includes('danke') || input.includes('dankeschön')) {
      return 'Sehr gerne! Falls Sie weitere Fragen haben oder ein unverbindliches Beratungsgespräch wünschen, bin ich jederzeit für Sie da. Gemeinsam finden wir die perfekte Automatisierungslösung für Ihr Unternehmen.';
    }
    
    // Default response
    return 'Das ist eine interessante Frage! Automatisierung kann in vielen Bereichen helfen - von Vertrieb über Finanzen bis hin zu HR-Prozessen. Können Sie mir mehr Details zu Ihrem konkreten Anliegen geben? So kann ich Ihnen gezielter weiterhelfen.';
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
                      Ihr smarter Automatisierungs-Agent
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
                          {message.timestamp.toLocaleTimeString('de-DE', { 
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
                    placeholder="Schreiben Sie Ihre Nachricht..."
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