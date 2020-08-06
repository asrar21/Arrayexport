class ArrayExport{
    constructor(format,data){
      this.name="Array to csv and excel file data";
      
      if(format==="excel"){
          return  this.objectToExcel(data)
      }
      if(format==="csv"){
       return  this.objectToCsv(data)
    }
    }
    
    async objectToCsv(data){
      let csvRows=[]
      
      const headers=Object.keys(data[0])
      csvRows.push(headers.join(','))
     
      for(const row of data){
        const values =headers.map(header=>{
          const escape=(''+row[header]).replace(/[&\/\\#+()$~%'"*?<>{}]/g,'');
        
          return `"${escape}"`;
        })
        csvRows.push(values.join(','))
        
      }
      return csvRows.join('\n')
    }
    async objectToExcel(data){
      let csvRows=[]
      
      const headers=Object.keys(data[0])
      csvRows.push(headers.join('\t'))
      
      for(const row of data){
        const values =headers.map(header=>{
          const escape=(''+row[header]).replace(/[&\/\\#+()$~%'"*?<>{}]/g,'')
          return `"${escape}"`;
        })
        csvRows.push(values.join('\t'))
        
      }
      return csvRows.join("\n")
    }
  
  }
  module.exports=ArrayExport;

