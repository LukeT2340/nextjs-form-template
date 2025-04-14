import { describe, it, expect, vi } from "vitest";
import { GET } from "./route";
import { NextResponse } from "next/server";
import * as utilities from "../../utilities";

describe("check-status endpoint", () => {
  it("returns status 200 when competition is open", async () => {
    // Mock the competitionHasClosed function
    vi.spyOn(utilities, "competitionHasClosed").mockReturnValue(false);

    const response = await GET();
    const data = await response.json();

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(200);
    expect(data.message).toBe("Competition is open");
  });

  it("returns status 403 when competition is closed", async () => {
    // Mock the competitionHasClosed function
    vi.spyOn(utilities, "competitionHasClosed").mockReturnValue(true);

    const response = await GET();
    const data = await response.json();

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(403);
    expect(data.message).toBe("Form is closed");
  });

  it("returns status 500 when an error occurs", async () => {
    // Mock the competitionHasClosed function to throw an error
    vi.spyOn(utilities, "competitionHasClosed").mockImplementation(() => {
      throw new Error("Test error");
    });

    const response = await GET();
    const data = await response.json();

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(500);
    expect(data.message).toBe("Something went wrong. Please try again.");
  });
});
