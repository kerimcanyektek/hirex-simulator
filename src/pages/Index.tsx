
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { UsersIcon, CpuChipIcon, CalendarDaysIcon, ChartBarIcon, StarIcon, TrophyIcon, ClockIcon, ArrowTrendingUpIcon, CheckCircleIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface JobRequirement {
  position: string;
  sector: string;
  experience: string;
  workMode: string;
}

interface Candidate {
  id: number;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  matchScore: number;
  avatar: string;
}

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Senior Frontend Developer",
    experience: "5 yıl",
    skills: ["React", "TypeScript", "Node.js"],
    matchScore: 92,
    avatar: "👨‍💻"
  },
  {
    id: 2,
    name: "Elif Kaya",
    role: "Frontend Developer",
    experience: "3 yıl",
    skills: ["Vue.js", "JavaScript", "CSS"],
    matchScore: 78,
    avatar: "👩‍💻"
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "Full Stack Developer",
    experience: "4 yıl",
    skills: ["React", "Python", "PostgreSQL"],
    matchScore: 85,
    avatar: "👨‍💼"
  }
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [jobRequirement, setJobRequirement] = useState<JobRequirement>({
    position: '',
    sector: '',
    experience: '',
    workMode: ''
  });
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState('');

  const { toast } = useToast();

  const steps = ["Hoş Geldin", "İş İlanı", "Aday Havuzu", "Değerlendirme", "Görüşme", "Ekip Değerlendirmesi", "Analytics", "Sonuç"];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setScore(score + 10);
    }
  };

  const handleCandidateSelect = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setScore(score + candidate.matchScore / 10);
    toast({
      title: "Aday Seçildi!",
      description: `${candidate.name} başarıyla seçildi. Eşleşme oranı: %${candidate.matchScore}`
    });
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    toast({
      title: "Görüşme Tarihi Seçildi!",
      description: `${date} tarihinde görüşme planlandı.`
    });
  };

  const progressPercentage = (currentStep + 1) / steps.length * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Adım {currentStep + 1} / {steps.length}
            </span>
            <div className="flex items-center gap-2">
              <TrophyIcon className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">{Math.round(score)} puan</span>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {currentStep === 0 && (
            <Card className="text-center animate-fade-in">
              <CardHeader>
                <div className="mb-4">
                  <SparklesIcon className="h-16 w-16 text-purple-500 mx-auto animate-pulse" />
                </div>
                <CardTitle className="text-3xl mb-4">
                  Hirex İşe Alım Simülasyonuna Hoş Geldin! 🚀
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Gerçek bir işe alım sürecini deneyimleyerek Hirex'in gücünü keşfet
                </p>
              </CardHeader>
              <CardContent>
                <div className="max-w-md mx-auto space-y-4">
                  <Input 
                    placeholder="Adınızı girin" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                    className="text-center" 
                  />
                  <Button 
                    onClick={nextStep} 
                    disabled={!userName.trim()} 
                    className="w-full" 
                    size="lg"
                  >
                    Başlayalım <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 1 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersIcon className="h-6 w-6 text-blue-500" />
                  Merhaba {userName}! İş İlanını Tanımla
                </CardTitle>
                <p className="text-muted-foreground">
                  Aradığınız pozisyon için detayları belirleyin
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pozisyon</label>
                    <Input 
                      placeholder="ör: Frontend Developer" 
                      value={jobRequirement.position} 
                      onChange={(e) => setJobRequirement({...jobRequirement, position: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sektör</label>
                    <Input 
                      placeholder="ör: Teknoloji" 
                      value={jobRequirement.sector} 
                      onChange={(e) => setJobRequirement({...jobRequirement, sector: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tecrübe Seviyesi</label>
                    <select 
                      className="w-full p-2 border rounded-md" 
                      value={jobRequirement.experience} 
                      onChange={(e) => setJobRequirement({...jobRequirement, experience: e.target.value})}
                    >
                      <option value="">Seçiniz</option>
                      <option value="junior">Junior (0-2 yıl)</option>
                      <option value="mid">Mid-level (2-5 yıl)</option>
                      <option value="senior">Senior (5+ yıl)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Çalışma Modeli</label>
                    <select 
                      className="w-full p-2 border rounded-md" 
                      value={jobRequirement.workMode} 
                      onChange={(e) => setJobRequirement({...jobRequirement, workMode: e.target.value})}
                    >
                      <option value="">Seçiniz</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="onsite">Ofis</option>
                    </select>
                  </div>
                </div>
                <Button 
                  onClick={nextStep} 
                  disabled={!jobRequirement.position || !jobRequirement.sector} 
                  className="w-full mt-6"
                >
                  Aday Havuzunu Gör <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CpuChipIcon className="h-6 w-6 text-purple-500" />
                  AI Eşleştirme Sonuçları
                </CardTitle>
                <p className="text-muted-foreground">
                  Hirex AI, {jobRequirement.position} pozisyonu için en uygun adayları buldu
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockCandidates.map((candidate) => (
                    <Card 
                      key={candidate.id} 
                      className={`cursor-pointer transition-all hover:shadow-lg ${selectedCandidate?.id === candidate.id ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => handleCandidateSelect(candidate)}
                    >
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-4xl mb-2">{candidate.avatar}</div>
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.role}</p>
                          <p className="text-sm">{candidate.experience}</p>
                          
                          <div className="mt-3">
                            <Badge 
                              variant={candidate.matchScore >= 90 ? "default" : candidate.matchScore >= 80 ? "secondary" : "outline"} 
                              className="mb-2"
                            >
                              %{candidate.matchScore} Eşleşme
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            {candidate.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {selectedCandidate && (
                  <div className="mt-6 text-center">
                    <Button onClick={nextStep} size="lg">
                      {selectedCandidate.name} ile Devam Et <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && selectedCandidate && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  Otomatik Değerlendirme Sonuçları
                </CardTitle>
                <p className="text-muted-foreground">
                  {selectedCandidate.name} için Hirex AI değerlendirmesi tamamlandı
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">85%</div>
                      <p className="text-sm text-muted-foreground">Teknik Yetkinlik</p>
                      <Progress value={85} className="mt-2" />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">92%</div>
                      <p className="text-sm text-muted-foreground">Kişilik Uyumu</p>
                      <Progress value={92} className="mt-2" />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">78%</div>
                      <p className="text-sm text-muted-foreground">Problem Çözme</p>
                      <Progress value={78} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Hirex AI Önerisi:</strong> Bu aday pozisyon için mükemmel bir eşleşme! 
                    Teknik becerileri güçlü ve takım kültürüne uyumlu.
                  </p>
                </div>
                
                <Button onClick={nextStep} className="w-full mt-6" size="lg">
                  Görüşme Planla <CalendarDaysIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-6 w-6 text-orange-500" />
                  Görüşme Planlama
                </CardTitle>
                <p className="text-muted-foreground">
                  {selectedCandidate?.name} ile görüşme tarihi seçin
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {['15 Ocak Pazartesi', '16 Ocak Salı', '17 Ocak Çarşamba', '18 Ocak Perşembe', '19 Ocak Cuma', '22 Ocak Pazartesi', '23 Ocak Salı', '24 Ocak Çarşamba'].map((date) => (
                    <Button 
                      key={date}
                      variant={selectedDate === date ? "default" : "outline"}
                      onClick={() => handleDateSelect(date)}
                      className="h-auto p-3 text-sm"
                    >
                      {date}
                    </Button>
                  ))}
                </div>
                
                {selectedDate && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-green-800">
                        ✅ Görüşme {selectedDate} tarihinde Zoom üzerinden planlandı
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Takvim davetleri otomatik olarak gönderildi
                      </p>
                    </div>
                    
                    <Button onClick={nextStep} className="w-full" size="lg">
                      Ekip Değerlendirmesine Geç <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {currentStep === 5 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersIcon className="h-6 w-6 text-teal-500" />
                  Ekip Değerlendirmesi
                </CardTitle>
                <p className="text-muted-foreground">
                  Takım arkadaşlarınızın görüşleri
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                      AY
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Ayşe Yılmaz - Tech Lead</p>
                      <p className="text-sm text-muted-foreground">
                        "Teknik bilgileri çok güçlü, React konusunda deneyimli. Takımımıza değer katacak."
                      </p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                      MK
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Murat Koç - Product Manager</p>
                      <p className="text-sm text-muted-foreground">
                        "İletişimi çok iyi, ürün geliştirme süreçlerini anlıyor. Kesinlikle işe alalım!"
                      </p>
                      <div className="flex mt-2">
                        {[...Array(4)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <StarIcon className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Scorecard Özeti</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Teknik Beceri: <span className="font-semibold">9/10</span></div>
                    <div>İletişim: <span className="font-semibold">8/10</span></div>
                    <div>Problem Çözme: <span className="font-semibold">9/10</span></div>
                    <div>Takım Uyumu: <span className="font-semibold">8/10</span></div>
                  </div>
                </div>
                
                <Button onClick={nextStep} className="w-full mt-6" size="lg">
                  Analytics'e Geç <ChartBarIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 6 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBarIcon className="h-6 w-6 text-indigo-500" />
                  İşe Alım Analytics Dashboard
                </CardTitle>
                <p className="text-muted-foreground">
                  Sürecinizin detaylı analizi
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <ArrowTrendingUpIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">%89</div>
                      <p className="text-sm text-muted-foreground">Ortalama Eşleşme</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <ClockIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">5 gün</div>
                      <p className="text-sm text-muted-foreground">Ortalama Süreç Süresi</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <TrophyIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">%73</div>
                      <p className="text-sm text-muted-foreground">Başarılı İşe Alım</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <h4 className="font-medium mb-2">🚀 Süreç Optimizasyonu</h4>
                    <p className="text-sm text-muted-foreground">
                      Hirex AI ile işe alım süreciniz %65 daha hızlı tamamlandı
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <h4 className="font-medium mb-2">💰 Maliyet Tasarrufu</h4>
                    <p className="text-sm text-muted-foreground">
                      Geleneksel yöntemlere göre %40 daha az maliyet
                    </p>
                  </div>
                </div>
                
                <Button onClick={nextStep} className="w-full mt-6" size="lg">
                  Sonuçları Gör <TrophyIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 7 && (
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <TrophyIcon className="h-16 w-16 text-yellow-500 mx-auto animate-bounce" />
                </div>
                <CardTitle className="text-3xl text-green-600">
                  🎉 Tebrikler {userName}!
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  İşe alım sürecini başarıyla tamamladınız
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Hiring Master 🏆</h3>
                  <p className="text-3xl font-bold text-orange-600">{Math.round(score)} Puan</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mükemmel bir işe alım süreci yönettiniz!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">İşe alım süreçlerinizi bu şekilde yönetmek ilginizi çekiyor mu?</h4>
                  
                  <div className="max-w-md mx-auto space-y-3">
                    <Input 
                      type="email" 
                      placeholder="E-mail adresinizi girin" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={() => {
                        if (email) {
                          toast({
                            title: "Teşekkürler!",
                            description: "Demo talebi alındı. En kısa sürede sizinle iletişime geçeceğiz."
                          });
                        }
                      }}
                    >
                      Ücretsiz Demo İste 🚀
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => window.open('#', '_blank')}
                    >
                      Partner Program'a Katıl 🤝
                    </Button>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>Bu simülasyon, Hirex'in gerçek özelliklerinin sadece küçük bir kısmını gösteriyor.</p>
                  <p className="mt-1">Tam potansiyeli keşfetmek için demo talebinde bulunun!</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
