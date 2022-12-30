import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [inputCategories, setInputCategories] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputCategories.trim().length <= 0) return;
        onNewCategory(inputCategories.trim());
        setInputCategories('')
    }

    const onImputChange = ({ target }) => {
        setInputCategories(target.value)

    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Buscar Gifts"
                    value={ inputCategories }
                    onChange={ onImputChange }
                />
            </form>
        </>
    )
}

export default AddCategory
