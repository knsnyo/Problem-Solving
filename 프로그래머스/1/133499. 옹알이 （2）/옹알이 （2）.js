function solution(babbling) {
    var answer = 0;
    babbling = babbling.map(b => {
        b = b.replaceAll('aya', '!');
        if(b.includes('!!')) return b;
        
        b = b.replaceAll('ye', '@');
        if(b.includes('@@')) return b;

        b = b.replaceAll('woo', '#');
        if(b.includes('##')) return b;
        
        b = b.replaceAll('ma', '$');
        if(b.includes('$$')) return b;

        b = b.replaceAll('!', '').replaceAll('@', '').replaceAll('#', '').replaceAll('$', '');
        
        return b;
    })
    return babbling.reduce((a, b) => b.length === 0 ? a + 1 : a , 0)
}