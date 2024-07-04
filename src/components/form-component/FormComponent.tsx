import React from 'react';
import {addMeal} from "@/services/db/db";

const FormComponent = () => {
    return (
        <form action={addMeal}>

            <input type="text" name={'title'}/>
            <input type="text" name={'creator'}/>
            <input type="text" name={'image'}/>
            <input type="text" name={'slug'}/>
            <input type="text" name={'summary'}/>
            <input type="text" name={'instructions'}/>
            <input type="text" name={'creator_email'}/>
            <button>save meal</button>


        </form>
    );
};

export default FormComponent;


// import React from 'react';
// import { addMeal } from "@/services/db/db";
//
// const FormComponent = () => {
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//
//         try {
//             await addMeal(formData);
//             alert("Meal added successfully!");
//         } catch (error) {
//             console.error("Error adding meal:", error);
//             alert("Failed to add meal.");
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="title" placeholder="Title" required />
//             <input type="text" name="creator" placeholder="Creator" required />
//             <input type="text" name="image" placeholder="Image URL" required />
//             <input type="text" name="slug" placeholder="Slug" required />
//             <input type="text" name="summary" placeholder="Summary" required />
//             <input type="text" name="instructions" placeholder="Instructions" required />
//             <input type="email" name="creator_email" placeholder="Creator Email" required />
//             <button type="submit">Save Meal</button>
//         </form>
//     );
// };
//
// export default FormComponent;
