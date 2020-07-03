import React from "react"
import tw, { styled } from "twin.macro"

const skills = [
    {
        title: "Web",
        tools: ["HTML5", "CSS3 / SCSS", "RESTful API", "GraphQL"],
    },
    {
        title: "Javascript",
        tools: ["React", "Redux", "Angular", "NgRx", "Node.js", "Express"],
    },
    {
        title: "Java",
        tools: ["Spring", "MyBatis"],
    },

    {
        title: "Python",
        tools: ["Flask", "peewee"],
    },
    {
        title: "Database",
        tools: ["MySQL", "Postgres", "DB2"],
    },
]

const Header3 = tw.h3`font-medium text-red-500`
const SkillsCard = styled.div`
    ${tw`border rounded-md shadow-md w-10/12 sm:w-48 m-3 py-3`}
    ${tw`transition duration-200 hover:transform hover:scale-110`}
    ${tw`hover:bg-red-500 hover:text-white`}
    &:hover {
        h3 {
            @apply ${tw`text-white underline`};
        }
    }
    `

const SkillsSection = () => (
    <section tw="h-auto w-full mx-auto my-32 md:my-64 text-2xl md:text-3xl text-center">
        <h2 tw="font-medium text-3xl md:text-4xl pb-8 sm:pb-16">
            I am proficient with the following:
        </h2>
        <div tw="flex flex-wrap justify-center">
            {skills.map(({ title, tools }) => (
                <SkillsCard key={title}>
                    <Header3>{title}</Header3>
                    <ul>
                        {tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </SkillsCard>
            ))}
        </div>
    </section>
)

export default SkillsSection
