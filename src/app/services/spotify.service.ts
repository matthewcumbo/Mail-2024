import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  clientId = "f9f207bf35254c7a920509e8b6282764";
  clientSecret = "e0a2db4aa0d041f5a1714153162f6310";

  constructor() { }

  async getToken(){
    const result = await fetch(
      'https://accounts.spotify.com/api/token', {
        method : 'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization':'Basic '+btoa(this.clientId+':'+this.clientSecret)
        },
        body: 'grant_type=client_credentials'
      }
    );

    const data = await result.json();
    return data.access_token;
  }

  async getCategories(){
    const token = await this.getToken();

    const result = await fetch(
      'https://api.spotify.com/v1/browse/categories',{
        method:'GET',
        headers:{'Authorization':'Bearer '+token}
      }
    );

    const data = await result.json();
    return data.categories.items;
  }

  async getPlaylists(categoryId:string){
    const token = await this.getToken();

    const result = await fetch(
      'https://api.spotify.com/v1/browse/categories/'+categoryId+'/playlists',{
        method:'GET',
        headers:{'Authorization':'Bearer '+token}
      }
    );

    const data = await result.json();
    return data.playlists.items;
  }

  async getPlaylist(id:string){
    const token = await this.getToken();

    const result = await fetch(
      'https://api.spotify.com/v1/playlists/'+id,{
        method:'GET',
        headers:{'Authorization':'Bearer '+token}
      }
    );

    const data = await result.json();

    // console.log(data);
    const playlistData = {
      "name":data["name"],
      "description":data["description"],
      "followers":data["followers"].total,
      "image":data["images"][0].url
    };

    return playlistData;
  }

  async getPlaylistTracks(id:string){
    const token = await this.getToken();

    const result = await fetch(
      'https://api.spotify.com/v1/playlists/'+id+'/tracks?limit=10',{
        method:'GET',
        headers:{'Authorization':'Bearer '+token}
      }
    );

    const data = await result.json();
    // console.log(data);
    return data.items;
  }


}
