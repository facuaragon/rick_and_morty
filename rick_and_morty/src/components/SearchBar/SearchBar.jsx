import styled from "styled-components";

const Input = styled.input`
   border: 2px solid;
   border-radius: 5px;
   border-color: grey;
   width: 200px;
   height: 30px;
   margin-right: 20px;
`

const Button = styled.button`
   background-color: #6BCC83;
   color: white;
   font-weight: bold;
   height: 30px;
   border: 0px;
`

export default function SearchBar(onSearch) {
   return (
      <div>
         <Input type='search' />
         <Button onClick={(id)=>{
            onSearch(id)
            }}
            >
            Agregar</Button>
      </div>
   );
}
