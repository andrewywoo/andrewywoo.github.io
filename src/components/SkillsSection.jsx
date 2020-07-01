import React from "react"
import tw, { styled } from "twin.macro"

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
            <SkillsCard>
                <Header3>Web</Header3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3 / SCSS</li>
                    <li>RESTful API</li>
                    <li>GraphQL</li>
                </ul>
            </SkillsCard>
            <SkillsCard>
                <Header3>Javascript</Header3>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Angular</li>
                    <li>NgRx</li>
                    <li>Node.js</li>
                    <li>Express</li>
                </ul>
            </SkillsCard>
            <SkillsCard>
                <Header3>Java</Header3>
                <ul>
                    <li>Spring</li>
                    <li>MyBatis</li>
                </ul>
            </SkillsCard>
            <SkillsCard>
                <Header3>Python</Header3>
                <ul>
                    <li>Flask</li>
                    <li>peewee</li>
                </ul>
            </SkillsCard>
            <SkillsCard>
                <Header3>Database</Header3>
                <ul>
                    <li>MySQL</li>
                    <li>Postgres</li>
                    <li>DB2</li>
                </ul>
            </SkillsCard>
        </div>
    </section>
)

export default SkillsSection
