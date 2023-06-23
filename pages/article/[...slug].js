import React from 'react'

const Article = ({params}) => {
    console.log('params :', params)
    return (
        <>
            catch all routes : {params.slug.join('/')}  
        </>
    )
}


export const getServerSideProps = async ({params}) => {
  
    return {
        props: {params}
    }
}

export default Article
