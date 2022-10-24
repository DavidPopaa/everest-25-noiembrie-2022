import React from 'react';
import "../Styles/categories.css";

const Categories = () => {
  return ( 
    <div className='big-div'>
    <div className='center-title'><div className='categories-title-div'><h1 id='categories-title'>Categorii</h1></div>
</div>

    <div className='grid-container'>
    <div className='categories-div first'><div className='category-name'><h1 className='text'>Jucarii</h1></div></div> 
    <div className='categories-div second'><div className='category-name'><h1 className='text'>Natura</h1></div></div>
    <div className='categories-div third'><div className='category-name'><h1 className='text'>Papuci</h1></div></div>
    <div className='categories-div forth'><div className='category-name'><h1 className='text'>Tehnologie</h1></div></div>
    <div className='categories-div fivth'><div className='category-name'><h1 className='text'>Ceasuri</h1></div></div>
    <div className='categories-div sixth'><div className='category-name'><h1 className='text'>Pentru Acasa</h1></div></div>
    <div className='categories-div seventh'><div className='category-name'><h1 className='text'>Imbracaminte</h1></div></div>
    <div className='categories-div eigth'><div className='category-name'><h1 className='text'>Arta</h1></div></div>
    <div className='categories-div nine'><div className='category-name'><h1 className='text'>Altele</h1></div></div>
    </div>

    </div>
    

   );
}

export default Categories;

