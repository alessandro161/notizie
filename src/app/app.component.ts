import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notizie';
}
$(function(){
  $.ajax({
   type:'GET',
   url:"https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=dcbe67b159424c85be9e1745d5c5fdcb",
   data:'html',
   success: function(result){
      for(var i=0;i<result.totalResults;i++){
        $("table").append("<tr> <td>"+(result.articles[i].author)+"</td>"+"<td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].description)+"</td>");
                                            }
      $(function(){
                    $('td').mouseover(function(){
                   $(this).animate({ fontSize: "25px"},3000) ;     
                                                });
                    $('td').mouseout(function(){
                    $(this).animate({ fontSize: "11px"},3000);
                                                });
                    });
   },
   error: function(xhr){
   console.log("error")
   },
  });
  });