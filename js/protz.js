function getRandomInt(a,b){return Math.floor(Math.random()*(b-a+1))+a}var emails=["ch*a.cw*@yandex.ru","cx*cM*cL@yandex.ru","cK*t*r@mail.ru","*cJ*cN@gmail.com","cO*cR*@mail.ru","*cQ*8@mail.ru","cP*l*y@bk.g","cI*cH*@gmail.com","cB**cA@bk.g","cz*cy*@yandex.ru","d*cC.*cD.2J@yandex.ru","cG*cF.cE*@gmail.com","c9*n-c8*y@gmail.com","1P.*bG*bF@mail.ru","p**bE@gmail.com","bD**bH@mail.ru","bI.*bL*bK@mail.ru","bJ*bC*@yandex.ru","ab*bB*ck@mail.ru","m*bs*br@yandex.ru","bv**o-bw@yandex.ru","r*bA*@yandex.ru","h*bx*@gmail.com","bM*23*@yandex.ru","bN*c2*c1@yandex.ru","m*c0*bZ@mail.ru","c3*n*@gmail.com","c4.*s*c7@yandex.ru","c6.**eg@rambler.com","*c5*39@yandex.ru","bX*bR*@mail.ru","al*bQ*@mail.ru","bP*bO*@yandex.ru","2D*bS.bT*7@gmail.com","cT*bV*@yandex.ru","B-bU**@yandex.ru","*cS.d9.*e6@yandex.ru","e2*af*x@mail.ru","eb*ed*2@gmail.com","*e1*dL@mail.ru","dI*dZ.dS*@gmail.com","dU*e9*a@gmail.com","*dT*dV@gmail.com","dW.*dY*dX.dR@yandex.ru","dQ*dK*@mail.ru","dJ*dM*@yandex.ru","dP*o*dO@yandex.ru","dN*.e0*.ec@bk.g","**ef@yandex.ru","*eh*ej@yandex.ru","c*ea*e4@bk.g","e3.99*99*@yandex.ru","**e5@gmail.com","z*e7*dG@mail.ru","dc.*i*r@yandex.ru","dH*n*d8@yandex.ru","d7*0*57@mail.ru","*df*46@mail.ru","2D*dh*@mail.ru","dg*a.*d6.96@yandex.ru","2Z.cX**@yandex.ru","cW*ak*cU@mail.ru","3n*cY*@yandex.ru","q*d3*@mail.ru","d2*d1*9@yandex.ru","d0*dk*@mail.ru","s*dl*@mail.ru","f.3u*dA*@gmail.com","j*dy*93@mail.ru","al*dB*89@mail.ru","**dF@yandex.ru","dE.dD**o@2S.e","v*2I.dw*@yandex.ru","dv*dp*5@yandex.ru","do*dn*1X@mail.ru","m*.dm*dq@gmail.com","**dr@yandex.ru","du.dt.2*ds*@mail.ru","bW*bp.*@yandex.ru","1O.9k*bq*@1O.g","9i*9h*@yandex.ru","3p*9l*3@mail.ru","*9m*@mail.ru","9p*3*2@yandex.ru","9o**9n@gmail.com","*9g*9f@mail.ru","95*94*91.90@yandex.ru","97.**9a@yandex.ru","9e*9d*@mail.ru","de**9c-9b@yandex.ru","9q**2E@yandex.ru","9r*r*92@gmail.com","9G*9F*9E@mail.ru","9D**9H@gmail.com","9I.bo*s.1*6@yandex.ru","9J*db*9C@mail.ru","9B-9v*v*@yandex.ru","9u**2L.9t@yandex.ru","9s**9w@yandex.ru","9x*m*9A@yandex.ru","9z*9y.8Z*@2S.e","8Y*a*8w@yandex.ru","8v-8u-*32*@yandex.ru","8t**@mail.ru","8x.*8y*2L.8B@yandex.ru","*8A*@gmail.com","8z**8r.1P@gmail.com","8k*y-8i*@yandex.ru","8h*8l*@yandex.ru","2I**67@bk.g","8q**@rambler.com","8p**@8o.e","8n-8C*2J*@yandex.ru","8D*8S*@K.g","*8R*92@rambler.com","8P*8T*@gmail.com","1P*8U*8X@yandex.ru","g*8W*37@gmail.com","8V*ee*2G@mail.ru","8N**2E@rambler.com","8H*8G*@mail.ru","m.*2G*8F@gmail.com","8E*2*@mail.ru","a*d.m*8I@mail.ru","8J*8M*8L@mail.ru","8K*r.9M*9N@mail.ru","aV*s*aU@yandex.ru","f*aS*@yandex.ru","aW*aX*b0@mail.ru","aZ*aY*aR@mail.ru","34.2Q*2Q*@gmail.com","aQ*.aJ*am@yandex.ru","*aH*a@rambler.com","aG*a*1X@rambler.com","*aL*aP@gmail.com","*i*aO@yandex.ru","*aN-de*@yandex.ru","da*b2*bh@yandex.ru","bg**@mail.ru","s**bf@yandex.ru","p*be*bi@bk.g","d*bj*@yandex.ru","bn*bm*l@mail.ru","bd*k*m@yandex.ru","r*b*b6@yandex.ru","b5*8*@gmail.com","b3.b7**v@gmail.com","b8**.1X.bb@yandex.ru","ba*37*@gmail.com","aF*-98*1@yandex.ru","s*a3*a2@bk.g","a1**a0@mail.ru","3p*a4*ca@yandex.ru","a8*a7*@yandex.ru","a6*g*t@yandex.ru","d*.9Z*@yandex.ru","34.k**9Y@yandex.ru","9R*9Q.9P*0@mail.ru","*9S*9T@mail.ru","2Z.m*x*9V@yandex.ru","dj*a9*@yandex.ru","aa*ay*ax@mail.ru","*s*av@1O.g","az*i*aA@mail.ru","o*aC*au.ar@mail.ru","*ah*10@1O.g","*ae*ac@gmail.com","*ai.da*aq@gmail.com","ap*ao*4@mail.ru","n*9j*aj.ag@gmail.com","aB**@yandex.ru","aD.aw**9U@gmail.com","9W.2*32*@yandex.ru","9X.9O**@rambler.com","t*a5*4@mail.ru","aE*b9*3j@yandex.ru","3n*b4*bc@yandex.ru","*bl*@mail.ru","k*b1*@yandex.ru","*aM*@yandex.ru","3u*aK*aI@yandex.ru","*aT*@yandex.ru","*8O*8Q.8m@rambler.com","8j*8s*ad@yandex.ru","v**9L@yandex.ru","*dC*dx@gmail.com","*dz*2@rambler.com","*cZ*@yandex.ru","cV**@mail.ru","d4*3j*@yandex.ru","*di*1K@yandex.ru","dd.e8*r*ei.99@bk.g","bY*an*3@gmail.com"];$(document).ready(function(){for(var a=$(".list").children(),b=0;b<a.length;b++){var c=emails[getRandomInt(0,emails.length-1)],d=gamesArr[getRandomInt(0,gamesArr.length-1)].image;$(a[b]).find(".img").attr("style","background-image: url(img/games/"+d+");"),$(a[b]).find(".title").html(c)}}),setInterval(function(){var a=$(".list").children(),b=emails[getRandomInt(0,emails.length)],c=gamesArr[getRandomInt(0,gamesArr.length-1)].image;$(".list").append('<a href="javascript:void(0);" class="item view"><div class="img" style="background-image: url(img/games/'+c+');"></div><div class="title">'+b+"</div></a>"),$(a[0]).remove()},5e3);var gamesArr=[{id:2,image:"grand-theft-auto-v.jpg"},{id:3,image:"rust.jpg"},{id:4,image:"counter-strike-global-offensive.jpg"},{id:5,image:"mafia-3-season-pass.jpg"},{id:6,image:"rise-of-the-tomb-raider.jpg"},{id:7,image:"ark-survival-evolved.jpg"},{id:8,image:"h1z1-king-of-the-kill.jpg"},{id:9,image:"dark-souls-3-the-fire-fades-edition.jpg"},{id:10,image:"nba-2k17.jpg"},{id:11,image:"dead-by-daylight-deluxe-edition.jpg"},{id:12,image:"fallout-4.jpg"},{id:13,image:"civilization-v.jpg"},{id:14,image:"payday-2.jpg"},{id:15,image:"tom-clancys-rainbow-six-siege.jpg"},{id:16,image:"dying-light.jpg"},{id:17,image:"7-days-to-die.jpg"},{id:18,image:"watch-dogs-2-gold-edition.jpg"},{id:19,image:"arma-3.jpg"},{id:20,image:"the-witcher-3-wild-hunt-game-of-the-year-edition.jpg"},{id:21,image:"garrys-mod.jpg"},{id:22,image:"mad-max.jpg"},{id:23,image:"call-of-duty-black-ops-3.jpg"},{id:24,image:"metal-gear-solid-v-the-phantom-pain.jpg"},{id:25,image:"mortal-kombat-xl.jpg"},{id:26,image:"left-4-dead-2.jpg"},{id:27,image:"deus-ex-mankind-divided.jpg"},{id:28,image:"far-cry-primal-apex-edition.jpg"},{id:29,image:"just-cause-3.jpg"},{id:30,image:"doom.jpg"},{id:31,image:"rocket-league.jpg"},{id:32,image:"no-mans-sky.jpg"},{id:33,image:"civilization-6.jpg"},{id:34,image:"total-war-warhammer.jpg"},{id:35,image:"xcom-2.jpg"},{id:36,image:"bioshock-infinite.jpg"},{id:37,image:"call-of-duty-infinite-warfare.jpg"},{id:38,image:"dishonored-2.jpg"},{id:39,image:"assassins-creed-syndicate.jpg"},{id:40,image:"the-crew.jpg"},{id:41,image:"project-cars.jpg"},{id:42,image:"tom-clancys-the-division.jpg"},{id:43,image:"for-honor-gold-edition.jpg"},{id:44,image:"resident-evil-7-deluxe-edition.jpg"},{id:45,image:"sniper-elite-4.jpg"}];