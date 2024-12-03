export const Test = {
    cpf: (cpf: string) => {
        cpf = cpf.replace(/[^\d]+/g, "");
      
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
      
        let sum = 0;
        for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
        let remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(9))) return false;
      
        sum = 0;
        for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        return remainder === parseInt(cpf.charAt(10));
    },
    cnpj: (cnpj: string) => {
        cnpj = cnpj.replace(/[^\d]+/g, "");
      
        if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
      
        let length = cnpj.length - 2;
        let numbers: any = cnpj.substring(0, length);
        let digits = cnpj.substring(length);
        let sum = 0;
        let pos = length - 7;
      
        for (let i = length; i >= 1; i--) {
          sum += numbers.charAt(length - i) * pos--;
          if (pos < 2) pos = 9;
        }
      
        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result !== parseInt(digits.charAt(0))) return false;
      
        length = length + 1;
        numbers = cnpj.substring(0, length);
        sum = 0;
        pos = length - 7;
      
        for (let i = length; i >= 1; i--) {
          sum += numbers.charAt(length - i) * pos--;
          if (pos < 2) pos = 9;
        }
      
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        return result === parseInt(digits.charAt(1));
    }
}