const icon=document?.querySelecton('icon');
const nav=document?.querySelecton(".nav");


icon?.addEventListener ('click', () =>{
nav.classlist.toggle('.nav_visible');
}  );
