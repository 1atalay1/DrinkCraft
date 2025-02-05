import express from "express";
import axios from"axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(port,()=>{
        console.log("Port is runnging");
});

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/search",(req,res)=>{
        res.render("search.ejs",{
            status:0
        })
});

app.post("/search",async(req,res)=>{
        const i_drinkName=req.body.drinkName;
        try{
            const response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+i_drinkName);
            const data=response.data;
            const drinkName=(data.drinks[0].strDrink);
            const drinkType=(data.drinks[0].strCategory+","+data.drinks[0].strAlcoholic);
            const instruction=data.drinks[0].strInstructions;
            const strIngredient1=data.drinks[0].strIngredient1;
            const strIngredient2=data.drinks[0].strIngredient2;
            const strIngredient3=data.drinks[0].strIngredient3;
            const strIngredient4=data.drinks[0].strIngredient4;
            const strIngredient5=data.drinks[0].strIngredient5;
            const strIngredient6=data.drinks[0].strIngredient6;
            const strIngredient7=data.drinks[0].strIngredient7;
            const strIngredient8=data.drinks[0].strIngredient8;
            const strIngredient9=data.drinks[0].strIngredient9;
            const strIngredient10=data.drinks[0].strIngredient10;
            const strIngredient11=data.drinks[0].strIngredient11;
            const strIngredient12=data.drinks[0].strIngredient12;
            const strIngredient13=data.drinks[0].strIngredient13;
            const strIngredient14=data.drinks[0].strIngredient14;
            const strIngredient15=data.drinks[0].strIngredient15;

            var size_of_ingredients=0;

            const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15];
            for (var i=0;i<ingredients.length;i++){
                if(ingredients[i]===null) continue;
                size_of_ingredients++;
            }

            const strMeasure1= data.drinks[0].strMeasure1;
            const strMeasure2= data.drinks[0].strMeasure2;
            const strMeasure3= data.drinks[0].strMeasure3;
            const strMeasure4= data.drinks[0].strMeasure4;
            const strMeasure5= data.drinks[0].strMeasure5;
            const strMeasure6= data.drinks[0].strMeasure6;
            const strMeasure7= data.drinks[0].strMeasure7;
            const strMeasure8= data.drinks[0].strMeasure8;
            const strMeasure9= data.drinks[0].strMeasure9;
            const strMeasure10= data.drinks[0].strMeasure10;
            const strMeasure11= data.drinks[0].strMeasure11;
            const strMeasure12= data.drinks[0].strMeasure12;
            const strMeasure13= data.drinks[0].strMeasure13;
            const strMeasure14= data.drinks[0].strMeasure14;
            const strMeasure15= data.drinks[0].strMeasure15;

            const measure=[strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15];
            var ingredients_measure=[];
            for (var i=0;i<size_of_ingredients;i++){
                var temp_ingredients=ingredients[i];
                var temp_measure=measure[i];
                if(temp_measure===null){
                    ingredients_measure.push(temp_ingredients);
                }
                else{
                    var text=temp_measure+" , "+temp_ingredients;
                    ingredients_measure.push(text);
                }
            }
            


            res.render("search.ejs",
                {
                    status:1,
                    name:drinkName,
                    type:drinkType,
                    instruction:instruction,
                    ingredients:ingredients_measure
                }
            )
        }
        catch(err){
            console.log(err.message);
            res.render("search.ejs",{
                status:1
            })
        }

});


app.get("/random",async(req,res)=>{
        try {
        const response= await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const data=response.data;
        const drink_name=data.drinks[0].strDrink;
        const drink_type=data.drinks[0].strCategory+","+data.drinks[0].strAlcoholic;
        const strIngredient1=data.drinks[0].strIngredient1;
            const strIngredient2=data.drinks[0].strIngredient2;
            const strIngredient3=data.drinks[0].strIngredient3;
            const strIngredient4=data.drinks[0].strIngredient4;
            const strIngredient5=data.drinks[0].strIngredient5;
            const strIngredient6=data.drinks[0].strIngredient6;
            const strIngredient7=data.drinks[0].strIngredient7;
            const strIngredient8=data.drinks[0].strIngredient8;
            const strIngredient9=data.drinks[0].strIngredient9;
            const strIngredient10=data.drinks[0].strIngredient10;
            const strIngredient11=data.drinks[0].strIngredient11;
            const strIngredient12=data.drinks[0].strIngredient12;
            const strIngredient13=data.drinks[0].strIngredient13;
            const strIngredient14=data.drinks[0].strIngredient14;
            const strIngredient15=data.drinks[0].strIngredient15;
            var size_of_ingredients=0;
            const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15];
            for (var i=0;i<ingredients.length;i++){
                if(ingredients[i]===null) continue;
                size_of_ingredients++;
            }
            const strMeasure1= data.drinks[0].strMeasure1;
            const strMeasure2= data.drinks[0].strMeasure2;
            const strMeasure3= data.drinks[0].strMeasure3;
            const strMeasure4= data.drinks[0].strMeasure4;
            const strMeasure5= data.drinks[0].strMeasure5;
            const strMeasure6= data.drinks[0].strMeasure6;
            const strMeasure7= data.drinks[0].strMeasure7;
            const strMeasure8= data.drinks[0].strMeasure8;
            const strMeasure9= data.drinks[0].strMeasure9;
            const strMeasure10= data.drinks[0].strMeasure10;
            const strMeasure11= data.drinks[0].strMeasure11;
            const strMeasure12= data.drinks[0].strMeasure12;
            const strMeasure13= data.drinks[0].strMeasure13;
            const strMeasure14= data.drinks[0].strMeasure14;
            const strMeasure15= data.drinks[0].strMeasure15;

            const measure=[strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15];
            var ingredients_measure=[];
            for (var i=0;i<size_of_ingredients;i++){
                var temp_ingredients=ingredients[i];
                var temp_measure=measure[i];
                if(temp_measure===null){
                    ingredients_measure.push(temp_ingredients);
                }
                else{
                    var text=temp_measure+" , "+temp_ingredients;
                    ingredients_measure.push(text);
                }
            }

            const instruction=data.drinks[0].strInstructions;
            
        res.render("random.ejs",{
            name:drink_name,
            type:drink_type,
            ingredients:ingredients_measure,
            instruction: instruction
        });
        }
        catch(err){
            console.log("error");
            console.log(err.message);
        }
});

app.get("/generate",(req,res)=>{
    res.redirect("/random");
});


app.get("/categorize",async(req,res)=>{
    try{
        var response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        const category_data=response.data;
        var category_array=[];
        var ingredients_array=[];
        var alcoholic_array=[];
        for(var i=0;i<category_data.drinks.length;i++){
            category_array.push(category_data.drinks[i].strCategory);
        }
        response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        const ingredients_data=response.data;
        for(var i=0;i<ingredients_data.drinks.length;i++){
            ingredients_array.push(ingredients_data.drinks[i].strIngredient1);
        }

        response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");
        const alcoholic_data=response.data;
        for (var i=0;i<alcoholic_data.drinks.length;i++){
            alcoholic_array.push(alcoholic_data.drinks[i].strAlcoholic);
        }
       
        res.render("categorize.ejs",{
            category:category_array,
            ingredients:ingredients_array,
            alcohol:alcoholic_array
        })
    }
    catch(err){
        console.log(err.message);
    }
});

async function capitalizeAfterUnderscore(str) {
    return str.replace(/_(.)/g, (match, p1) => `_${p1.toUpperCase()}`);
  }

app.post("/query",async(req,res)=>{
    var i_category=req.body.categories;
    var i_ingredients=req.body.ingredients;
    var i_alcohol=req.body.alcohol;

    var query_alcohol=i_alcohol.replace(/ /g,"_");
    query_alcohol=await capitalizeAfterUnderscore(query_alcohol);
   
    
    var query_category=i_category.replace(/ /g,"_");
    query_category=await capitalizeAfterUnderscore(query_category);
  
    var query_ingredients=i_ingredients.replace(/ /g,"_");
    query_ingredients=await capitalizeAfterUnderscore(query_ingredients);
 
    
    try{
        var response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        const category_data=response.data;
        var category_array=[];
        var ingredients_array=[];
        var alcoholic_array=[];
        for(var i=0;i<category_data.drinks.length;i++){
            category_array.push(category_data.drinks[i].strCategory);
        }
        response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        const ingredients_data=response.data;
        for(var i=0;i<ingredients_data.drinks.length;i++){
            ingredients_array.push(ingredients_data.drinks[i].strIngredient1);
        }

        response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");
        const alcoholic_data=response.data;
        for (var i=0;i<alcoholic_data.drinks.length;i++){
            alcoholic_array.push(alcoholic_data.drinks[i].strAlcoholic);
        }

            const HOSTNAME="https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
            var query1="c="+query_category+"&";
            var query2="i="+query_ingredients+"&";
            var query3="a="+query_alcohol;
            var URL=HOSTNAME+query2+query1+query3;
             response=await axios.get(URL);
            const data=response.data;
            // console.log(data);
            var queryResult=[];
            for (var i=0;i<data.drinks.length;i++){
                queryResult.push(data.drinks[i].strDrink);
            }

            
            // console.log(queryResult);
            res.render("categorize.ejs",{
                data:queryResult,
                category:category_array,
                ingredients:ingredients_array,
                alcohol:alcoholic_array,
                i_category:i_category,
                i_alcohol:i_alcohol,
                i_ingredients:i_ingredients
            });


    }
    catch(err){
        console.log(err.message);
    }
    
});


app.post("/requset",async(req,res)=>{
        const i_drinkName=req.body.drinkName;
        try{
            const response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+i_drinkName);
            const data=response.data;
            const drinkName=(data.drinks[0].strDrink);
            const drinkType=(data.drinks[0].strCategory+","+data.drinks[0].strAlcoholic);
            const instruction=data.drinks[0].strInstructions;
            const strIngredient1=data.drinks[0].strIngredient1;
            const strIngredient2=data.drinks[0].strIngredient2;
            const strIngredient3=data.drinks[0].strIngredient3;
            const strIngredient4=data.drinks[0].strIngredient4;
            const strIngredient5=data.drinks[0].strIngredient5;
            const strIngredient6=data.drinks[0].strIngredient6;
            const strIngredient7=data.drinks[0].strIngredient7;
            const strIngredient8=data.drinks[0].strIngredient8;
            const strIngredient9=data.drinks[0].strIngredient9;
            const strIngredient10=data.drinks[0].strIngredient10;
            const strIngredient11=data.drinks[0].strIngredient11;
            const strIngredient12=data.drinks[0].strIngredient12;
            const strIngredient13=data.drinks[0].strIngredient13;
            const strIngredient14=data.drinks[0].strIngredient14;
            const strIngredient15=data.drinks[0].strIngredient15;

            var size_of_ingredients=0;

            const ingredients=[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15];
            for (var i=0;i<ingredients.length;i++){
                if(ingredients[i]===null) continue;
                size_of_ingredients++;
            }

            const strMeasure1= data.drinks[0].strMeasure1;
            const strMeasure2= data.drinks[0].strMeasure2;
            const strMeasure3= data.drinks[0].strMeasure3;
            const strMeasure4= data.drinks[0].strMeasure4;
            const strMeasure5= data.drinks[0].strMeasure5;
            const strMeasure6= data.drinks[0].strMeasure6;
            const strMeasure7= data.drinks[0].strMeasure7;
            const strMeasure8= data.drinks[0].strMeasure8;
            const strMeasure9= data.drinks[0].strMeasure9;
            const strMeasure10= data.drinks[0].strMeasure10;
            const strMeasure11= data.drinks[0].strMeasure11;
            const strMeasure12= data.drinks[0].strMeasure12;
            const strMeasure13= data.drinks[0].strMeasure13;
            const strMeasure14= data.drinks[0].strMeasure14;
            const strMeasure15= data.drinks[0].strMeasure15;

            const measure=[strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15];
            var ingredients_measure=[];
            for (var i=0;i<size_of_ingredients;i++){
                var temp_ingredients=ingredients[i];
                var temp_measure=measure[i];
                if(temp_measure===null){
                    ingredients_measure.push(temp_ingredients);
                }
                else{
                    var text=temp_measure+" , "+temp_ingredients;
                    ingredients_measure.push(text);
                }
            }
            


            res.render("search.ejs",
                {
                    status:1,
                    name:drinkName,
                    type:drinkType,
                    instruction:instruction,
                    ingredients:ingredients_measure
                }
            );
        }
        catch(err){
            console.log(err.message);
        }

});
