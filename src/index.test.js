import expect from 'expect';
import chai from 'chai';
chai.should();

describe('Our first test', () => {
  it('expect that expect works', () => {
    expect(true).toEqual(true);
  });

  it('should should work', () => {
    let foo = 'foo';
    foo.should.equal('foo');
  });
});

function echo(text, delay){
    if(!delay) delay = 0;    
    return setTimeout( () => {return text;}, delay);
}

// describe('testing generators', () => {
//   function* genFunc() {
//     console.log('First');
//     yield 1; // (A)
//     console.log('Second'); // (B)
//     yield 2;
//     console.log('Third'); // (C)
//     yield 3
//   }

//   it('should count to 3', () => {
//     var gen = genFunc();
//     //console.log('linefeed...');    
//     // var i = 0;
//     // var result = [];
    
//     // do{
//     //     result.push(gen.next());
//     // }
//     // while( !result[result.length-1].done );            
//     //   console.log(`${++i}: ${result[result.length-1].value}`);
    

//     //result.length.should.equal(4);    
//     //result.pop().should.have.property('value', undefined);
//     // expect(result.pop().value).toEqual(undefined);
//     expect(gen.next().value).toEqual(1);
//     expect(gen.next().value).toEqual(2);
//     expect(gen.next().value).toEqual(3);
//     expect(gen.next().done).toEqual(true);    
//   });

//   it('another generator iteration', () => {
//     var gen = genFunc();
//     let arr = [...gen]; //[1,2,3]    
    
//     expect(arr.length).toEqual(3);
    
//   });  
// });

// describe('advanced generator', () => {
//   function* objectEntries(obj) {
//       // In ES6, you can use strings or symbols as property keys,
//       // Reflect.ownKeys() retrieves both
//       let propKeys = Reflect.ownKeys(obj);
  
//       for (let propKey of propKeys) {
//           yield [propKey, obj[propKey]];
//       }
//   }
//   it('iterates over object props', () => {
//     let jane = { first: 'Jane', last: 'Doe' };
//     for (let [key,value] of objectEntries(jane)) {
//         key.should.equal('first');
//         value.should.equal('Jane');
//         console.log(`${key}: ${value}`);
//     }
//   });
// })