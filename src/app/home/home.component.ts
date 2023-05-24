import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Vu Truong Vu';
  public age = 18;
  public traiCay = ['tao','nho'];
  public traiCay2 = [
    {ten: 'tao', gia:100},
    {ten: 'chuoi', gia:10},
    {ten: 'dao', gia:50}];
  constructor(){}
  ngOnInit(): void{
    console.log('trai cay =', this.traiCay);
  }
  public resetName():void{
    console.log('resetName');
    this.name='';
  }

  public VNData=[{city: "Tỉnh/ Thành phố", district:['Quận/Huyện']},{city: "Lạng Sơn", district:['Huyện Hữu Lũng','Huyện xx', 'Huyện abc']},{city: "Hà Nội", district:['Huyện Đông Anh','Huyện xx', 'Huyện abc']}]
  public districts: string[]=[];
  public changeCity(event: any): void{
    const city =  event.target.value;
    if(!city){
      return;
    }

    //c1:
    // console.log('event', event.target.value);
    // const search = this.VNData.filter((data) => data.city === city);
    // if(search && search.length >0){
    //   this.districts = search[0].district;
    // }
    //c2
    this.districts = this.VNData.find(data => data.city === city)?.district || [];
  }
}
