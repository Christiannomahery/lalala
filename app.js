var n = parseInt (prompt ("Entrez le nombre: "));
for (let i=1; i<=n; i++) {
    for (let j=1; j<=n-i; j++){
        document.write(" ");
    }
    for (let k=1; k<=(2*i-1); k++){
        document.write(" *");
    }
    document.write(" "+"<br>");
  }