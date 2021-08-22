/* eslint-disable prettier/prettier */
export class userModel {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    public static data=[
        {
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 2,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 4,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 5,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 6,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ];
    constructor(id,email,first_name,last_name,avatar){
        this.id=id;
        this.email=email;
        this.first_name=first_name;
        this.last_name=last_name;
        this.avatar=avatar;
    }
    public static getProduct(){
        return this.data;
    }
    public static updateProduct(index,product){
        this.data[index]=product
    }
    public static createProduct(product){
        this.data.push(product)
    }
    public static deleteProduct(id){
        this.data=this.data.filter(item=>{
            return item.id!=id;
        })
    }
}