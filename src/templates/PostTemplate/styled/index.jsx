import tw, { styled } from "twin.macro"

export const BlogDiv = styled.div`
    ${tw`mx-12 w-full lg:w-9/12`}
    p {
        ${tw`mb-6`}
    }
    h2 {
        ${tw`text-3xl font-medium mb-6`}
    }
    h3 {
        ${tw`text-2xl mb-3`}
    }
    ul { 
        ${tw`list-disc list-inside mb-6`}
     }
     ol { 
        ${tw`list-decimal list-inside mb-6`}
     }
     ul ul, ol ul { 
         ${tw`list-circle list-inside ml-16`}
     }
     ol ol, ul ol { 
        ${tw`list-roman list-inside ml-16`}
     }
     ul p, ol p {
         ${tw`inline`}
     }
     pre {
         ${tw`mb-6`}
     }
     code {
         ${tw`text-sm`}
     }
     a {
         ${tw`underline hover:text-red-500`}
     }
`