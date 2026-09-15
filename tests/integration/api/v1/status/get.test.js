test("GET  to /api/v1/status returns 200 OK", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  
  expect(responseBody.updated_at).toBeDefined(); 
  expect(responseBody.version).toBeDefined(); 
  expect(responseBody.max_connections).toBeDefined(); 
  expect(responseBody.opened_connections).toBeDefined();
  
  
  console.log('Máximo de Conexões:'+responseBody.max_connections); 
  console.log('Conexões Abertas:'+responseBody.opened_connections); 
 

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();

  expect(responseBody.updated_at).toEqual(expect.any(String));
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);
  expect(responseBody.version).toEqual(expect.any(String));
  expect(responseBody.max_connections).toEqual(expect.any(Number)); 
  expect(responseBody.max_connections).toBeGreaterThan(0);
  expect(responseBody.opened_connections).toEqual(expect.any(Number));
  expect(responseBody.opened_connections).toEqual(1);
  expect(responseBody.opened_connections).toBeGreaterThanOrEqual(0);


   
}); 
