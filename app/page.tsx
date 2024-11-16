import Navbar from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { problems } from '@/data/problems'
import { solutions } from '@/data/solutions'
import { pricing } from '@/data/pricing'
import { Switch } from '@radix-ui/react-switch'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from '@/components/Footer'
const Home = () => {
  return(
    <>
    <div>
      <Navbar />
      <section id='Hero'>

        <div className="w-full">

              <div className="max-w-sm py-20 md:max-w-md text-center mx-auto lg:max-w-xl lg:py-32">
                  <Badge variant={"outline"} className="font-medium text-sm rounded-full mb-4" data-aos="fade-right" data-aos-delay="1000">Website under development... <img src="/arrow-right-line.svg" alt="arrow du badge" width={15} height={15} className="ml-2"/></Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 lg:text-6xl " data-aos="fade-left" data-aos-delay="900">Streamline Your Business Management</h1>
                  <p className="text-slate-600 mb-4" data-aos="fade-right" data-aos-delay="800">
                      Optimize tasks, track performance, and empower your team with our
                      all-in-one management platform.
                  </p>
                  <Button className="font-semibold mt-8" data-aos="fade-left" data-aos-delay="700">Get Started for Free</Button>
                  <p className="md:text-sm mt-4" data-aos="fade-left" data-aos-delay="700">7 day free trial. No credit card required.</p>
              </div>
              
              <div className="w-full relative">
                  <div className="relative">
                      <div className="mt-20" data-aos="fade-up" data-aos-delay="800">
                          <img 
                              src="/dashboardscreen.png" 
                              alt="screen de dashboard" 
                              width={700} 
                              height={700} 
                              className="border rounded-lg mx-auto"
                          />
                      </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-background via-background to-transparent lg:h-2/4"></div>
              </div>
          </div>
          
      </section>
      <section id='Features'>

        <div className="max-w-7xl px-4 lg:mx-auto lg:py-20">
              <div className='mb-20 text-center' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                  <p className='uppercase font-medium mb-4'>Problem</p>
                  <h1 className='text-3xl font-semibold md:text-5xl'>Obstacles in Business Management</h1>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {problems.map((problems, index) => (
                      <div key={index} className='md:flex flex-col gap-4 justify-between'>
                          <div className='bg-muted w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                              <img src={problems.icon} alt="icones problems section" className='' width={24} height={24}/>
                          </div>
                          <h1 className='text-xl font-semibold mb-4'>{problems.title}</h1>
                          <p className='text-muted-foreground'>{problems.subtitle}</p>
                      </div>
                  ))}
              </div>
          </div>

      </section>
      <section id="Solutions">

        <div className='bg-neutral-100 my-20'>
              <div className="text-center py-8 w-72 mx-auto md:w-full">
                  <p className="uppercase mb-2">Solutions</p>
                  <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl md:text-5xl lg:text-5xl">Optimize Team Productivity</h1>
              </div>
              <div className="py-20 mx-auto relative max-w-7xl px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {solutions.map((solutions, index)=> (
                          <div key={index} className={`p-6 rounded-lg overflow-hidden bg-neutral-50 ${index == 2 ? "md:row-span-2" : index == 3 && "md:col-span-2"}`}>
                              <h1 className="font-semibold mb-2">{solutions.title}</h1>
                              <p className="font-thin text-sm md:text-base">{solutions.subtitle}</p>
                              <img src="/dashboardscreen.png" alt="" className="-mb-32 lg:-mb-32 md:-mb-24 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"/>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

      </section>
      <section id="Pricings">
      <div className="max-w-7xl px-4 md:mx-auto">
            <div className="text-center mb-20">
                <p className="mb-8 uppercase tracking-wider">Pricing</p>
                <h1 className="mb-8 text-3xl font-semibold xl:text-5xl">Choose the plan that's right for you</h1>
                <div className="flex justify-center items-center gap-4">
                    <p className="font-semibold">Monthly</p>
                    <Switch />
                    <p className="font-semibold">Yearly</p>
                </div>
            </div>
            <div className="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex mx-auto gap-4 flex-col lg:flex-row lg:max-w-4xl">
                {pricing.map((pricing, index) => (
                    <div key={index} className={`border w-full rounded-md h-auto p-4 flex flex-col h-96 gap-6 justify-between ${index == 1 ? "border-2 border-black" : ""}`}>
                        <div className="text-center">
                            <h1 className="font-semibold uppercase mb-4">{pricing.title}</h1>
                            <p className="font-bold text-3xl">{pricing.price}</p>
                        </div>
                        <ul className="">
                            {pricing.features.map((feature,index) => (
                                <li key={index} className="flex gap-2">
                                    <img src="/check.svg" alt="" width={20} height={20} />{" "}
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="text-center">
                            <Button
                                className="w-full my-2"
                                variant={index === 1 ? "default" : "outline"}
                            >
                                Subscribe
                            </Button>
                            <p className="text-gray-400 text-sm mt-2">
                                Perfect for individuals and small projects
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section id="Faq">
        <div className="max-w-sm md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-12">
              <div className="text-center py-12">
                  <p className="tracking-wide mb-4">FAQ</p>
                  <h1 className="font-semibold text-2xl xl:text-5xl">Frequently asked questions</h1>
              </div>
              <Accordion type="single" collapsible>

                  <AccordionItem value="item-1" className="">
                      <AccordionTrigger className="md:text-base">
                      Comment puis-je suivre la productivité de mes employés en temps réel ?
                      </AccordionTrigger>
                      <AccordionContent className="md:text-base">
                      Grâce à notre tableau de bord intuitif, vous pouvez suivre en temps réel
                      les heures de travail, les tâches complétées et les statuts des employés.
                      Des rapports détaillés vous aident également à analyser la productivité et
                      les performances de chaque membre de l'équipe.
                      </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                      <AccordionTrigger className="md:text-base">
                      Quels types de rapports puis-je générer avec la plateforme ?
                      </AccordionTrigger>
                      <AccordionContent className="md:text-base">
                      Vous pouvez générer des rapports personnalisés pour suivre la
                      productivité de vos équipes, comparer les performances entre employés et
                      analyser les données sur une base hebdomadaire, mensuelle ou en temps
                      réel.
                      </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                      <AccordionTrigger className="md:text-base">
                      Puis-je personnaliser les fonctionnalités selon mes besoins ?
                      </AccordionTrigger>
                      <AccordionContent className="md:text-base">
                      Oui, notre plateforme est entièrement personnalisable. Vous pouvez adapter
                      le tableau de bord, les rapports, et même les statuts des employés selon
                      les spécificités de votre entreprise.
                      </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                      <AccordionTrigger className="md:text-base">
                      Quels sont les outils intégrés à la plateforme ?
                      </AccordionTrigger>
                      <AccordionContent className="md:text-base">
                      Notre plateforme s'intègre facilement avec des outils de communication
                      tels que Slack et Microsoft Teams, ainsi qu'avec des calendriers comme
                      Google Calendar, pour une gestion centralisée et fluide.
                      </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                      <AccordionTrigger className="md:text-base">
                      Est-ce que je peux automatiser certaines tâches ?
                      </AccordionTrigger>
                      <AccordionContent className="md:text-base">
                      Oui, la plateforme permet d'automatiser des tâches répétitives, comme les
                      rappels de tâches, les notifications de statut ou la génération de
                      rapports périodiques, pour vous faire gagner du temps et améliorer
                      l'efficacité.
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>

          </div>
      </section>
      <section id="CTA">
        <div className="w-full bg-neutral-100 py-16">
              <div className="container text-center md:mx-auto px-4 py-16 max-w-7xl">
                  <p className='uppercase tracking-wide text-sm mb-4'>Ready to get started ?</p>
                  <h1 className='text-3xl mb-6 mx-4 font-semibold'>Start your free trial today.</h1>
                  <Button className='w-full md:max-w-md'>Get started for Free</Button>
              </div>
          </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Home