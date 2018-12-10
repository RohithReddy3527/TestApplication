import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Items from './items';
//import Results from'./results';
import data from './data';
import {connect} from 'react-redux';
import {fetchData} from './State/actions'

var items=[];

var result;
class Items extends Component {
constructor(){
    super();
    this.state={
value:"true",
text:'',
output:''
    }
    this.BasicServiceChkChange=this.BasicServiceChkChange.bind(this);
    this.onPlaceorder=this.onPlaceorder.bind(this);
    this.Dinesh=this.Dinesh.bind(this);
    
}
    componentDidMount()
    {
        // var text=data;
        // if(this.props.Itemsdata === null )
        //     this.props.fetchData(text);
 
       // fetchData(data);
    }
    Dinesh(min){    
      result=min.packs.map((e,id)=>{
             var totalcost =0;
             var totalweight=0;
             var itemnames="";
             var cost=0;
                if(Array.isArray(e))
                {                  
                   e.forEach((item,i)=>{
                         totalcost += parseInt(item["Price($)"]); 
                         totalweight += parseInt(item["Weight(g)"]); 
                         if( itemnames !=="")
                         itemnames =itemnames+","+item["Name"];
                         else
                         itemnames +=item["Name"];;
                   });
                }
                else{
                         totalcost = parseInt(e["Price($)"]); 
                         totalweight = parseInt(e["Weight(g)"]); 
                         items =e["Name"]
                }
                         if(totalweight <201)
                                 cost=5;
                             else if(totalweight <501)  
                                cost=10;  
                             else if(totalweight <1001)  
                                  cost=15;  
                             else if(totalweight <5001)  
                                 cost=20; 



                return(
                         <div class="resultdiv"margin="none" pad="small" >
                                <label>package : {id+1}</label>
                                 <label>items : {itemnames}</label>
                                  <label>Total price ($) {totalcost}</label>
                                   <label>Total weight (g) {totalweight}</label>
                                    <label>Courier price($) {cost}</label>
                                    <label> <br></br></label>
                               </div>
                            );
              })
                          
  }
    onPlaceorder(){
        var min={
            minprice:0,
            packs:[]
        }
        if(items.length<1){
            this.setState({output:"Please Choose any item before clicking on Place Order"})
        }else{

            var i=0;
            items.sort(function(a, b){
                    return a["Price($)"]-b["Price($)"]
                    })
        var allpacks=[];
        var packs={};
        var temp=[];
        var cost = 0;
                  items.forEach((e)=>{
                    cost+=parseInt(e["Price($)"]);                       
                        if(cost <=250){
                           temp.push(e);                                                                                                                      
                            }
                            else if( temp.length > 0 )
                            {                                
                                   allpacks.push(temp);                                    
                                   temp =[];
                                   cost = parseInt(e["Price($)"]);
                                   temp.push(e);
                            }
                             else
                             {
                                allpacks.push(e);  
                             }
                        });
                     allpacks.push(temp);
                     
         var tot_packCost = 0;
         allpacks.map((e,id)=>{
               var packageWait=0;
                 if(Array.isArray(e))
                 {                  
                    e.forEach((item,i)=>{
                          packageWait += parseInt(item["Weight(g)"]); 
                    });
                 }
                 else{
                          packageWait = parseInt(e["Weight(g)"]); 
                 }
                          if(packageWait <201)
                                  cost=5;
                              else if(packageWait <501)  
                                 cost=10;  
                              else if(packageWait <1001)  
                                   cost=15;  
                              else if(packageWait <5001)  
                                  cost=20; 
              tot_packCost+=cost;    
              });
              if(min.minprice == 0)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
              else if(min.minprice > tot_packCost)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
            this.Dinesh(min);
            items.sort(function(a, b){
                    return   a["Weight(g)"]-b["Weight(g)"]
                    })   
        var allpacks=[];
        var packs={};
        var temp=[];
        var cost = 0;
                  items.forEach((e)=>{
                    cost+=parseInt(e["Price($)"]);                       
                        if(cost <=250){
                           temp.push(e);                                                                                                                      
                            }
                            else if( temp.length > 0 )
                            {                                
                                   allpacks.push(temp);                                    
                                   temp =[];
                                   cost = parseInt(e["Price($)"]);
                                   temp.push(e);
                            }
                             else
                             {
                                allpacks.push(e);  
                             }
                        });
                     allpacks.push(temp);
                     
         var tot_packCost = 0;
         allpacks.map((e,id)=>{
               var packageWait=0;
                 if(Array.isArray(e))
                 {                  
                    e.forEach((item,i)=>{
                          packageWait += parseInt(item["Weight(g)"]); 
                    });
                 }
                 else{
                          packageWait = parseInt(e["Weight(g)"]); 
                 }
                          if(packageWait <201)
                                  cost=5;
                              else if(packageWait <501)  
                                 cost=10;  
                              else if(packageWait <1001)  
                                   cost=15;  
                              else if(packageWait <5001)  
                                  cost=20; 
              tot_packCost+=cost;         
              });
              if(min.minprice == 0)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
              else if(min.minprice > tot_packCost)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
            this.Dinesh(min);
                    
                     //this.Dinesh(items);
         items.sort(function(a, b){
                    return b["Price($)"]-a["Price($)"]
                    })
                   
        var allpacks=[];
        var packs={};
        var temp=[];
        var cost = 0;
                  items.forEach((e)=>{
                    cost+=parseInt(e["Price($)"]);                       
                        if(cost <=250){
                           temp.push(e);                                                                                                                      
                            }
                            else if( temp.length > 0 )
                            {                                
                                   allpacks.push(temp);                                    
                                   temp =[];
                                   cost = parseInt(e["Price($)"]);
                                   temp.push(e);
                            }
                             else
                             {
                                allpacks.push(e);  
                             }
                        });
                     allpacks.push(temp);
                     
         var tot_packCost = 0;
         allpacks.map((e,id)=>{
               var packageWait=0;
                 if(Array.isArray(e))
                 {                  
                    e.forEach((item,i)=>{
                          packageWait += parseInt(item["Weight(g)"]); 
                    });
                 }
                 else{
                          packageWait = parseInt(e["Weight(g)"]); 
                 }
                          if(packageWait <201)
                                  cost=5;
                              else if(packageWait <501)  
                                 cost=10;  
                              else if(packageWait <1001)  
                                   cost=15;  
                              else if(packageWait <5001)  
                                  cost=20; 
              tot_packCost+=cost;           
              });
              if(min.minprice == 0)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
              else if(min.minprice > tot_packCost)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
            this.Dinesh(min);
        items.sort(function(a, b){
                    return   b["Weight(g)"]-a["Weight(g)"]
                    })  
        var allpacks=[];
        var packs={};
        var temp=[];
        var cost = 0;
                  items.forEach((e)=>{
                    cost+=parseInt(e["Price($)"]);                       
                        if(cost <=250){
                           temp.push(e);                                                                                                                      
                            }
                            else if( temp.length > 0 )
                            {                                
                                   allpacks.push(temp);                                    
                                   temp =[];
                                   cost = parseInt(e["Price($)"]);
                                   temp.push(e);
                            }
                             else
                             {
                                allpacks.push(e);  
                             }
                        });
                     allpacks.push(temp);
                     
         var tot_packCost = 0;
         allpacks.map((e,id)=>{
               var packageWait=0;
                 if(Array.isArray(e))
                 {                  
                    e.forEach((item,i)=>{
                          packageWait += parseInt(item["Weight(g)"]); 
                    });
                 }
                 else{
                          packageWait = parseInt(e["Weight(g)"]); 
                 }
                          if(packageWait <201)
                                  cost=5;
                              else if(packageWait <501)  
                                 cost=10;  
                              else if(packageWait <1001)  
                                   cost=15;  
                              else if(packageWait <5001)  
                                  cost=20; 
              tot_packCost+=cost;              
              });
              if(min.minprice == 0)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
              else if(min.minprice > tot_packCost)
              {
                    min.minprice = tot_packCost;
                    min.packs = allpacks;
              }
            this.Dinesh(min);
             this.setState({ output:result});
        }
    }
    BasicServiceChkChange(e,id)
    {
        var abc=id;
        data.Products.map((val,id)=>{
            if(abc===id)
            {
                val["IsChecked"]=e.target.checked;
                if(e.target.checked===true)
                 {
                     items.push(val);
                 }
                 else{
                   
                var position=items.indexOf(val);
                   items.splice(position,1);
                 }
            }    
        })
      
        
        this.setState({value:e.target.checked});
    }

  render() {
      

      var BasicServiceList;
    BasicServiceList=  data.Products.map((val,id)=>{   
        var valChecked;
              if(val["IsChecked"]==true){
                 valChecked = true;
              }else{
                 valChecked= false;
              }                                                          
     return(
         <div ><form class="form"><input type= "checkbox" id='cbox' checked={valChecked} class="chkbox" onClick={(e)=>this.BasicServiceChkChange(e,id)}></input>{val["Name"]}</form></div>
  );
});
var Text=" "
if(this.state.text !== ""){
Text=<p>{this.state.text}</p>
}
    return (
        <div>
        <div class='itemclass' >
        <div class="list" >
        {BasicServiceList}
        </div>
        <div class="result">
        You Can View Your Order Details Here:-
          {this.state.output}
        </div>
        </div>
        <div>
         <footer><input type="button" class='button' value="Place Order" onClick={(e)=>this.onPlaceorder(e)}/></footer> 
        </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {  
    return{ 
     ItemsData:state.ItemsData
    };
    };
    const mapDispatchToProps = (dispatch) => {
        
        return {
         OnfetchData:() =>{
            dispatch(fetchData(data));
        } 
           
        };
    };
    
    
    export default  connect(mapStateToProps,mapDispatchToProps)(Items);