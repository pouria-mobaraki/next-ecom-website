export default function CategoriesList({ categories }) {
    console.log(categories);
    
  return (
    <div>
      <div className="filter-list">
        <div className="form-label">دسته بندی</div>
        <ul>
            
          {categories.map(category=>(
            <li key={category.id} className="my-2 cursor-pointer">{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
