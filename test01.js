/*整数 a,b,c,dが与えられます。a ≤ x ≤ b, c ≤ y ≤ dとなるように整数 x,yを選ぶとき、
x−yの最大値を求めてください。入力は全て整数 −100 ≤ a ≤ b ≤ 100 , −100 ≤ c ≤ d ≤ 100 */
const main = ()=>{    
    let a,b,c,d;
    let x,y;

    a = -100;
    b = 100;
    c = -100;
    d = 100;
    //この場合xが最大かつyが最小、すなわち x = b , y = c

    x = b;
    y = c;

    console.log(x-y);
}

main();