
import ReplaceAll from '../extensoes';
const puppeteer = require('puppeteer');

  async function handler(req, res) {
    if(req.method ==='POST'){
        console.log(req.method);
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        let url = req.body.data;

        //await page.goto(url.data, {waitUntil: 'networkidle2', timeout: 600, defaultViewport: {width: 1920, height: 1080}});
        //await page.goto({url: 'http://app.sefaz.es.gov.br/ConsultaNFCe/qrcode.aspx?p=32210606955576001080651230001274811761890230|2|1|1|BEF56549DC43B8470BC2B2D4D921951CC720755A', options: {waitUntil:'networkidle2', timeout: 0}});
        await page.goto(url.url.toString(), {waitUntil: 'networkidle2', timeout: 0});
           
        
        
        const pageContent = await page.evaluate(() => {  
             var prd =  [];          
            
            var table = document.querySelector('#tabResult');
            if(table != null && table != undefined){
                for(let i in table.rows){
                    let row = table.rows[i];
                    if(!isNaN(i)){
                        let product = {
                            id: parseFloat(i) +1,
                            productCode: row.children[0].children[1].innerHTML.replace('(Código: ','').replace(')','').replace('\n','').replace(' ','').trim(),
                            productName: row.children[0].children[0].innerHTML.replace(/\s\s+/g, ' '),
                            quantity: row.children[0].children[3].innerHTML.replace('\n','').replace('<strong>Qtde.:</strong>','').replace(' ','').trim(),
                            unitaryValue: row.children[0].children[5].innerHTML.replace('\n','').replace('<strong>Vl. Unit.:</strong>','').replace('&nbsp;','').replace(' ','').trim(),
                            unity: row.children[0].children[4].innerHTML.replace('\n','').replace('<strong>UN: </strong>','').replace('&nbsp;','').replace(' ','').trim(),
                            amount: row.children[1].children[1].innerHTML.replace('\n','').replace('<strong>UN: </strong>','').replace('&nbsp;','').replace(' ','').trim(),                            
                        }
                            prd.push(product);                        
                    }
                }
            }
    
            return {
                title: document.querySelector('.txtTopo').innerHTML,
                chave: document.querySelector('.chave').innerHTML,
                vlrTotal: document.querySelector('.txtMax').innerHTML,
                products: Array.from(prd),
                produtos: [prd]
            };
        });
    
        browser.close();
        res.status(200).json(pageContent);
    }
    else{
        res.status(200).json(req.body);
    }
    
    
    //res.status(200).text(url);
  }


  function remove(name){
      return name;
  }

export default handler;