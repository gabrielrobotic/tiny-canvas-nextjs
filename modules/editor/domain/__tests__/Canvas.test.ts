import { describe, it, expect } from 'vitest'
import { Canvas } from '../Canvas'

describe('Canvas', () => {
  it('should create a canvas with correct dimensions', () => {
    const canvas = new Canvas(8, 8)

    expect(canvas.width).toBe(8)
    expect(canvas.height).toBe(8)
    expect(canvas.pixels.length).toBe(64)
  })
})
