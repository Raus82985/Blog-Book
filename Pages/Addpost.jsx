import React from 'react'
import { Container } from '../src/Components'
import PostForm from '../src/Components/postForm/PostForm'

function Addpost() {
  return (
    <div className='py-8'>
      <Container>
        {console.log("addpost is accessed")}
        <PostForm/>
      </Container>
    </div>
  )
}

export default Addpost
