// export default function reducer(){
//           return 'State';
//       }
      const initialState = {
  
        supportedList:null,
        ItemsData:null,
      
        ServicesChanged:{val:false},
        SizerWorkloadnotChanged:{val:false},
        isWaiting:false
      
      }
      
      const sizerWorkload = (state = initialState, action) => {
      switch (action.type) {
      case 'FETCH_DATA' :    
          return  Object.assign({}, state, {   
            ItemsData:action.payload,
          });
      }
          return state;
        };
             
 export default sizerWorkload;
      