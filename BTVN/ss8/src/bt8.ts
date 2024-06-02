type type1 = string | number;
type type2 = boolean | null;
type type3 = type1 | type2;

function cong(check: type3) {
  return console.log(check);
}

cong("a");
cong(10);
cong(true);
cong(null);