import { useNavigate } from "react-router-dom";

export default function CrazyHorse(){
     const navigate = useNavigate()


  const handleClick = () => {
    navigate('/')
  }



  return (
    <div className="container-crazy">
      <h1 className="title-homePage">CRAZY HORSE</h1>
    </div>
  );
}