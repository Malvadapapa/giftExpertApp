import React from 'react'
import {useState} from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

const [categories, setCategories] = useState([''])

const onAddCategory = (newCategory)=> {

 setCategories([newCategory,...categories])

}

  return (
<> 

<h1>GifExpertApp</h1>

<AddCategory onNewCategory={onAddCategory} />

<ol>
 {categories.map(categories=>{ return <li key={categories}>{categories}</li>})}
</ol>

</>
  )
}

export default GifExpertApp
