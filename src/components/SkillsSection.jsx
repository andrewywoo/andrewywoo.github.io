import React from "react"
import tw from "twin.macro"

function SkillsSection() {

    const Header3 = tw.h3`font-medium text-red-400`
    const SkillsCard = tw.div`border-2 rounded-md shadow-md w-48 m-3 py-3`

    return (
        <section tw="h-auto w-full mx-auto my-32 md:my-64 text-2xl md:text-3xl text-center">
            <h2>Skills</h2>
            <div tw="flex flex-wrap justify-center">
                <SkillsCard>
                    <Header3>Web</Header3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
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
                    </ul>
                </SkillsCard>
                <SkillsCard>
                    <Header3>Python</Header3>
                    <ul>
                        <li>Flask</li>
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
}

export default SkillsSection
