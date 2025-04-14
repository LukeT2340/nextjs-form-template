// import { describe, it, expect, vi, beforeEach } from "vitest";
// import { NextRequest, NextResponse } from "next/server";
// import { POST } from "./route";
// import * as utilities from "../../utilities";
// import * as queries from "../../../database/queries";

// // Mock the database queries
// vi.mock("../../../database/queries", () => ({
//   submissionExists: vi.fn(),
//   addSubmission: vi.fn(),
// }));

// describe("submit endpoint", () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   it("returns status 201 when data submitted successfully", async () => {
//     // Mock the competitionHasClosed function
//     vi.spyOn(utilities, "competitionHasClosed").mockReturnValue(false);
//     vi.mocked(queries.submissionExists).mockResolvedValue(false);
//     vi.mocked(queries.addSubmission).mockResolvedValue();

//     // Mock data
//     const mockData = {
//       description: "Test description",
//       firstName: "John",
//       lastName: "Doe",
//       email: "JohnDoe@example.com",
//       postCode: "1234",
//       phoneNumber: "1234567890",
//       state: "NSW",
//     };

//     // Mock the request object
//     const requestObj = {
//       json: async () => mockData,
//     } as NextRequest;

//     // Mock the response object
//     const response = await POST(requestObj);
//     const data = await response.json();

//     // Assertions
//     expect(response).toBeInstanceOf(NextResponse);
//     expect(response.status).toBe(201);
//     expect(data.message).toBe("Form submitted successfully");
//     expect(queries.submissionExists).toHaveBeenCalledWith(mockData.email);
//     expect(queries.addSubmission).toHaveBeenCalledWith(mockData);
//   });

//   it("returns a 400 status for duplicate emails", async () => {
//     // Mock the competitionHasClosed function
//     vi.spyOn(utilities, "competitionHasClosed").mockReturnValue(false);
//     vi.spyOn(queries, "submissionExists").mockResolvedValue(true);
//     vi.spyOn(queries, "addSubmission").mockResolvedValue();

//     // Mock data
//     const mockData = {
//       description: "Test description",
//       firstName: "John",
//       lastName: "Doe",
//       email: "JohnDoe@example.com",
//       postCode: "1234",
//       phoneNumber: "1234567890",
//       state: "NSW",
//     };

//     // Mock the request object
//     const requestObj = {
//       json: async () => mockData,
//     } as NextRequest;

//     // Mock the response object
//     const response = await POST(requestObj);
//     const data = await response.json();

//     // Assertions
//     expect(response).toBeInstanceOf(NextResponse);
//     expect(response.status).toBe(400);
//     expect(data.message).toBe(
//       "An entry has already been submitted for this email."
//     );
//   });

//   it("returns status 400 when competition is closed", async () => {
//     // Mock the competitionHasClosed function
//     vi.spyOn(utilities, "competitionHasClosed").mockReturnValue(true);
//     vi.spyOn(queries, "submissionExists").mockResolvedValue(false);
//     vi.spyOn(queries, "addSubmission").mockResolvedValue();

//     // Mock data
//     const mockData = {
//       description: "Test description",
//       firstName: "John",
//       lastName: "Doe",
//       email: "JohnDoe@example.com",
//       postCode: "1234",
//       phoneNumber: "1234567890",
//       state: "NSW",
//     };

//     // Mock the request object
//     const requestObj = {
//       json: async () => mockData,
//     } as NextRequest;

//     // Mock the response object
//     const response = await POST(requestObj);
//     const data = await response.json();

//     // Assertions
//     expect(response).toBeInstanceOf(NextResponse);
//     expect(response.status).toBe(400);
//     expect(data.message).toBe("The competition has closed.");
//   });

//   it("returns status 500 after 5 submission attempts", async () => {
//     // Mock the competitionHasClosed function
//     vi.spyOn(utilities, "competitionHasClosed").mockReturnValue(false);
//     vi.mocked(queries.submissionExists).mockResolvedValue(false);
//     vi.mocked(queries.addSubmission).mockResolvedValue();

//     // Mock data
//     const mockData = {
//       description: "Test description",
//       firstName: "John",
//       lastName: "Doe",
//       email: "JohnDoe@example.com",
//       postCode: "1234",
//       phoneNumber: "1234567890",
//       state: "NSW",
//     };

//     // Mock the request object
//     const requestObj = {
//       json: async () => mockData,
//     } as NextRequest;

//     // Mock the response object
//     const response = await POST(requestObj);
//     let refused = false;

//     for (let i = 0; i < 5; i++) {
//       await POST(requestObj);
//       if (response.status === 500) {
//         refused = true;
//       }
//     }

//     // Assertions - This test needs to work before production
//     expect(refused).toBe(true);
//   });
// });
