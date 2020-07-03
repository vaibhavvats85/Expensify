const add = (a, b) => a + b;
const generateGreeting = (name ='Anonymous') => `Hello ${name}!`;

test('should add two numbers', ()=>{
const result = add(3,4);
expect(result).toBe(7);
});

test('should return greeting with name', ()=>{
    const greeting = generateGreeting('Vaibhav');
    expect(greeting).toBe('Hello Vaibhav!')
});

test('should return greeting with no name', ()=>{
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!')
});