export type ThemeTokens = {
  primary: string
  secondary: string
  background: string
  text: string
}

export type ThemeAssets = {
  logo: string
  favicon: string
}

export type Theme = {
  themeId: string
  colors: ThemeTokens
  assets: ThemeAssets
}

export const themes: Record<string, Theme> = {
  default: {
    themeId: 'default',
    colors: {
      primary: '#1E88E5',
      secondary: '#43A047',
      background: '#F5F5F5',
      text: '#212121',
    },
    assets: {
      logo: 'https://imgs.search.brave.com/GO8ZB_gMZoE28uWTwsOjitIQ-cvL5jrv1h_8nqpyG_g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/c29jaWFsLW1lZGlh/L29uLWJyYW5kLndl/YnA',
      favicon: 'https://via.placeholder.com/32x32/1E88E5/FFFFFF?text=D',
    },
  },

  dark: {
    themeId: 'dark',
    colors: {
      primary: '#FF5722',
      secondary: '#FFC107',
      background: '#121212',
      text: '#E0E0E0',
    },
    assets: {
      logo: 'https://imgs.search.brave.com/tu80peDDYz46QJ-k5hQt-xJBiKLPdXDaWtkdTw-6rH8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/YXVkaW8tY3JlYXRp/b24vdmlzdWFscy1z/b25ncy53ZWJw',
      favicon: 'https://via.placeholder.com/32x32/FF5722/FFFFFF?text=🌙',
    },
  },

  ocean: {
    themeId: 'ocean',
    colors: {
      primary: '#0288D1',
      secondary: '#26C6DA',
      background: '#E1F5FE',
      text: '#01579B',
    },
    assets: {
      logo: 'https://imgs.search.brave.com/f_blnh0N-esMcv02dLJ-HGnl6_DNV7KWanaAhkyJnig/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0lD/bkZlMWtlMTB4YUto/MTh3YzlGemFvMTZD/Um1JN0NVR0M5OGZY/TDJkNTVfS2xuZExQ/bmVZbG9vaXMteE1n/VmJqOHV1Qm5od2l0/bEktN2Z0UDhKcjJR/MnFGR3dFUExLVVhC/MXZCWVhmbjRJPXcx/NDQwLWg4MTAtbi1u/dQ',
      favicon: 'https://via.placeholder.com/32x32/0288D1/FFFFFF?text=O',
    },
  },
}


