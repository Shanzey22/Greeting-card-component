
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));

function Meeting()
{
  return (
  <div style={{textAlign:"center"}}>
  <h1>This is Greeting</h1>
  </div>
  )

}
function GreetingCard(props)
{
  return (
    <div style={{textAlign:"center"}}>
    <h2 >Hi I am, {props.studentName}! <br/>from {props.city}.</h2>
    </div>
  )
}
root.render(
<>
<h1 style={{textAlign:"center"}}>🦁🔥This is Lion App💥🧨</h1>
<Meeting />
<GreetingCard studentName="Shanzey" city="Pune"/>
<GreetingCard studentName="Afsha" city="Delhi"/>
<GreetingCard studentName="Azlaan" city="Mumbai"/>
<GreetingCard studentName="Zoya" city="Hyderabad" />

</>
);

