import styled from 'styled-components';
import bg1 from './images/bg1.png';

export const Container = styled.div`
  width: 100%;
  margin: auto;

  section{ 
      height:100vh;
      width:100%;
      background-image:url(${bg1});
      display: flex;
      justify-content: center;
      background-Position: 'center';
      background-Repeat: no-repeat;
      background-size: cover;
      
    

      .product-content{
          width: min-content;
          display:grid;
          text-align: center;
          height:450px;
          background: whitesmoke;
          border-radius:12px;
          padding:5px;
          border:1px solid;
          margin: 1px;

           .button{
            width: 100%;
            height: 30px;
            margin-bottom: 10px;
            text-align: center;
            border-radius: 12px;
            background-color: black;
            color: white;
          }

        }
    }

`
