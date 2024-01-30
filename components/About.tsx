import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Vasin Suksuchit",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+668 37575 999",
  },
  {
    icon: <MailIcon size={20} />,
    text: "bestwasin1617@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 17 Sep, 1991",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Economics",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Address",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Kasetsart University",
        qualification: "Bachelor of Economics",
        years: "2010-2014",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Gosoft (CPALL)",
        qualification: "Software Engineer",
        years: "2023-Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML,CSS" },
      { name: "Front-end" },
      { name: "Javascirpt" },
      { name: "Typescript" },
      { name: "Back-end" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          about me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0 ">
                      Specialized in crafting initiative website with
                      cutting-edge technology, delivering dynamic and engaging
                      user experinence
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* lannguages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary ">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Thai</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div>
                      {/* experience */}
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalized font-medium">
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>
                      {/* education */}
                      <div>education</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;