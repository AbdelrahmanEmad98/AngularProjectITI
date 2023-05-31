import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly myClient:HttpClient) { }
  private readonly DB_URL = "https://jsonplaceholder.typicode.com/";
  private readonly DB_Json = "http://localhost:3000/";


  GetAllUsers(){
    return this.myClient.get(this.DB_Json+"users");
  }

  GetUserById(id:any){
    return this.myClient.get(this.DB_Json+"users/"+id)
  }
  GetAllAlbums(id:any){
    return this.myClient.get(this.DB_URL+"albums/?userId="+id);
  }
  GetAllPhotos(id:any){
    return this.myClient.get(this.DB_URL+"photos/?albumId="+id);
  }

  AddUser(newUser:any){
    return this.myClient.post(this.DB_Json+"users",newUser);
  }

  UpdateUser(updatedUsers:any, id:any){
    /** PUT: update the hero on the server. Returns the updated hero upon success. */
    console.log(updatedUsers)
    console.log(id)
     return this.myClient.put(this.DB_Json+"users/"+id, updatedUsers)
   }
 
   DeleteUser(id:any){
     return this.myClient.delete(this.DB_Json+"users/"+id)
   }
}
