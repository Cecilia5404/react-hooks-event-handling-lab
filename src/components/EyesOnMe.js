// Code EyesOnMe Component Here
function EyesOnMe(){
    function eventFocus(){
        console.log('Good!')
    }
    function eventBlur(){
      console.log('Hey! Eyes on me!')
  }
  
      return(
  
          <button onBlur={eventBlur} onFocus={eventFocus}>Eyes on me</button>
      )
  }
  export default EyesOnMe;
