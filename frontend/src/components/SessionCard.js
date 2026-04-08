import API from "../api";

export default function SessionCard({session}){

  const book = async ()=>{
    await API.post("/book/", {session: session.id});
    alert("Booked Successfully");
  };

  const pay = async ()=>{
    const {data} = await API.post("/payment/create/", {amount: session.price});

    const rzp = new window.Razorpay({
      key: "your_key",
      order_id: data.id,
      amount: data.amount,
      handler: ()=>{
        book();
      }
    });

    rzp.open();
  };

  return (
    <div style={{
      background:"white",
      padding:"15px",
      borderRadius:"10px",
      boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h3>{session.title}</h3>
      <p>{session.description}</p>
      <p><b>₹{session.price}</b></p>

      <button onClick={pay} style={{
        background:"green",
        color:"white",
        padding:"8px",
        border:"none",
        borderRadius:"5px"
      }}>
        Pay & Book
      </button>
    </div>
  );
}