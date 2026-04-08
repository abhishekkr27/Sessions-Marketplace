export default function Card({s, onBook}){
  return (
    <div className="border p-4 rounded">
      <h3>{s.title}</h3>
      <p>{s.description}</p>
      <button onClick={()=>onBook(s)}>Book</button>
    </div>
  );
}