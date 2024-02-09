export const generateConnectedId =  (data: string): string => {
    const id =  data.split('').map(char => char.charCodeAt(0).toString()).join('');
    return id.toString();
  }