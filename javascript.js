		
			function changeNav1() {			//varible function name
				$("#nav1").show(500).addClass("contentBox"); 	//calls id nav1, shows content box of nav 1
				$("#nav2").hide(500); 	//hides nav 2 when nav 1 is clicked
				$("#nav3").hide(500); 	//hides nav3 when nav 1 is clicked
				$("#nav4").hide(500); 	//hides nav4 when nav 1 is clicked  
			}
		
			$("#nav1button").on("click", changeNav1);
			
			
			function changeNav2() {		//varible function name
				$("#nav1").hide(500); //hides nav1 when nav 2 is clicked
				$("#nav2").show(500).addClass("contentBox");	//calls id nav2, shows content box of nav 2
				$("#nav3").hide(500); //hides nav3 when nav 2 is clicked
				$("#nav4").hide(500); //hides nav4 when nav 2 is clicked
			}
		
			$("#nav2button").on("click", changeNav2);
		
			function changeNav3() {			//varible function name
				$("#nav1").hide(500); //hides nav1 when nav 3 is clicked
				$("#nav2").hide(500); //hides nav2 when nav 3 is clicked
				$("#nav3").show(500).addClass("contentBox");	//calls id nav3, shows content box of nav 3
				$("#nav4").hide(500); //hides nav4 when nav 3 is clicked
			}
		
			$("#nav3button").on("click", changeNav3);
		
			function changeNav4() {			//varible function name
				$("#nav1").hide(500); //hides nav1 when nav 4 is clicked
				$("#nav2").hide(500); //hides nav2 when nav 4 is clicked
				$("#nav3").hide(500); //hides nav3 when nav 4 is clicked
				$("#nav4").show(500).addClass("contentBox"); //calls id nav4, shows content box of nav 4
			}
		
			$("#nav4button").on("click", changeNav4);
		
		
		
			$("#nav li").mouseover(function(){$(this).animate({marginTop: "-10px"},500);});		// moves the nav button up -10 px at 500 milsec
			$("#nav li").mouseleave(function(){$(this).animate({marginTop: "0px"},500);});		// moves the nav button back to 0 
			
				
