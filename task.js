// 1) Task-01 Konsola mesaj verin: «My name is Murad».
// let userName = "my name is murad"
// console.log(userName);

// 2) Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
// Bu dəyişənin dəyərini konsolda göstərin.
// let  name = "Nicat"; //  adınız
// const userName = "Nicat Verdiyev"; // Adınızın təyin olunduğu Sabit dəyişən
// console.log("ad:", name);
// console.log("Adınızın təyin olunduğu Sabit dəyişən:", userName);

// 3) Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// 2user -- olmaz
// c@rt -- olmaz
// person -- olar
// title color -- olar
// console -- olmaz
// $add -- olar

// 4) Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

// let bookPrice = 750;
// let bookAmount = 14;
// let allAmount = bookPrice * bookAmount;
// console.log("mağazasındaki bir kitabın qiyməti : ", bookPrice);
// console.log("depodaki kitab sayı : ", bookAmount);
// console.log("Depodaki bütün kitabların ümumi dəyəri : ", allAmount);


// 5) Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;

// let kmhSpeed = 75;
// const msSpeed = kmhSpeed * 1000 / 3600; // Sürəti saniyədə metrə çevirmək
// console.log("Saniyədə metrə sürət:", msSpeed);

// 6) İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın.

// let year = prompt("doğum tarixinizi qeyd edin!")
// let age = 2023 - year;
// let result = age * 365;
// console.log("yaşadığınız günlerin sayı :", result);

// 7) Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır.
// Konsola çıxaran belə proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.

// let num = 4;
// let numPower = Math.pow(num, 5)
// console.log("eded : ", num);
// console.log("ededin 5 ci dereceden qüvveti" , numPower);

// - 3-ə bölünmədən qalan bu ədədin qalığını.
// let num = 17;
// let qalıq = num % 3;
// console.log("eded : ", num);
// console.log("ededin qalığı : ", qalıq);

// 8) Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

// let firstName = "Nicat";
// let lastName = "Verdiyev .";
// let message_one = "Sizin adınız";
// let message_two ="Tanışlığımıza çox şadam!"
// console.log(message_one,firstName,lastName,message_two);
// console.log(`sizin adınız ${firstName} ${lastName} Tanışlığımıza şadam`);

// 9) Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

// let firstName = "Nicat";
// let lastName = "Verdiyev";
// console.log("Sizi bir daha görməyimizə şadıq, " , firstName, lastName);

// 10)Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.
// let fullName = "Murad Orucov"
// let fullName = "Nicat Verdiyev";
// let letterCount = fullName.replace(/\s/g, '').length; // Boşluqları silmək üçün replace() funksiyası

// console.log("Adınızdakı hərflərin sayı:", letterCount);


// 11) İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

// let fullName = "Nicat Verdiyev";
// let names = fullName.split(" "); // Adı soyadından ayırmaq

// let firstNameInitialLetter = names[0][0]; // İlk adın ilk hərfi
// let lastNameInitialLetter = names[1][0]; // Soyadın ilk hərfi

// console.log("Adın baş hərfi:", firstNameInitialLetter);
// console.log("Soyadın baş hərfi:", lastNameInitialLetter);


// 12)İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,
// let ad = prompt("adinizi qeyd edin!");
// let soyAd = prompt("soyadınızı qeyd edin");
// console.log( soyAd, ad )

// 13) Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let fullName = prompt("adınızı qeyd edin");
// console.log("Salam, ", fullName);

// 14 )İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın.

//  let numOne = prompt("birinci ededi daxil edin");
//  let numTwo = prompt("ikinci ededi daxil edin");
//  let num = Number(numOne);
//  let numm = Number(numTwo);

//  let toplama = num + numm;
//  let vurma = numOne * numTwo;
//  let cıxma = numOne - numTwo;
//  let bolme = numOne % numTwo;
//  console.log("toplama : ", toplama , "vurma : ", vurma , "cıxma :", cıxma , "bolme :", bolme);

// 18) İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// let fullName = prompt("adınızı daxil edin ");
// console.log("Salam ",fullName);
// ......................................................
// ............................................................................ FOR ME .............................................................................
// index-i 6 olanı ekrana ver
// let fullName = "Nicat Verdiyev";
// console.log(fullName[6]);

// (SPLİT)deyişeni götürmek
// let fullName = "Nicat Verdiyev";
// console.log(fullName.split("c"));

// sözdeki herfleri ekrana çıxartmaq
// let fullName = "Nicat Verdiyev";
// console.log(fullName[0], fullName[6]);
// yuxarıdakın da eger söz promt ile elave edilibse:
// let fullName = prompt();
// foundİndex = fullName.indexOf(" ") + 1;
// console.log(fullName[0] , fullName[foundİndex]);

// daxil edilen reqemlerin cemini tapmaq:
// let num = prompt();
// console.log(+num[0] + +num[1] + +num[2] + +num[3]);  
// qarşılarındakı + işaresi String'i Number'e çevirir.

