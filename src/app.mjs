// Initialize a new lua environment factory
// You can pass the wasm location as the first argument, useful if you are using wasmoon on a web environment and want to host the file by yourself
const LuaFactory = window.wasmoon.LuaFactory
const factory = new LuaFactory()
// Create a standalone lua environment from the factory
const lua = await factory.createEngine()

try {
    // Set a JS function to be a global lua function
    lua.global.set('sum', (x, y) => x + y)
    // Run a lua string
    await lua.doString(`
    print(sum(10, 10))
    function multiply(x, y)
        return x * y
    end
    `)
    // await lua.doFile("main.lua")
    // lua.global.set('multiply', test)
    // const multiply = lua.global.get('multiply')
    console.log(multiply(10, 10))
} finally {
    // Close the lua environment, so it can be freed
    console.log("Close the lua environment, so it can be freed")
    lua.global.close()
}