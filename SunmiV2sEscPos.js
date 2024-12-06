//Function to print an Image on sunmi v2s printer
//Image parameter must be in base64 format
function SunmiV2sendImage2(successF,errorF,base64Image){
	
				ThermalPrinter.bitmapToHexadecimalString({
					type: 'bluetooth',
					id: '00:11:22:33:44:55',
					printerWidthMM: 58,
					base64: base64Image
				}
				, function(img){
				
						var i = "<img>"+ img + "</img>\n";
						ThermalPrinter.printFormattedText({
						type: 'bluetooth',
						id: '00:11:22:33:44:55',
						printerWidthMM: 58,
						mmFeedPaper: 15,
						text: i
						}
						, successF
						, errorF
						);
				
				}, errorF
				);
				


}

function SunmiV2sendImage(successF,errorF,base64Image){
	
		ThermalPrinter.printFormattedText({
		type: 'bluetooth',
		id: '00:11:22:33:44:55',
		printerWidthMM: 58,
		mmFeedPaper: 15,
		text: base64Image
		}
		, successF
		, errorF
		);
}

//Function to send Text to Printer
//Parameters:
//text: is string of text to be printed
//size: can be 1-7
//isBold: boolean
//isUnderline: boolean
//icCenter: boolean
function SunmiV2sendText(successF,errorF,text,size,isBold,isUnderline, isCenter){

var testo = text;
if(isBold){
	testo = "<b>"+testo+"</b>";
}
if(isUnderline){
	testo = "<u>"+testo+"</u>";
}

if(size==1){
	testo = "<font size='normal'>"+testo+"</font>";
}
if(size==2){
	testo = "<font size='wide'>"+testo+"</font>";
}
if(size==3){
	testo = "<font size='tall'>"+testo+"</font>";
}
if(size==4){
	testo = "<font size='big'>"+testo+"</font>";
}
if(size==5){
	testo = "<font size='big-2'>"+testo+"</font>";
}
if(size==6){
	testo = "<font size='big-3'>"+testo+"</font>";
}
if(size==7){
	testo = "<font size='big-4'>"+testo+"</font>";
}

if(isCenter){
	testo = "[C]" + testo;
}


ThermalPrinter.printFormattedText({
    type: 'bluetooth',
    id: '00:11:22:33:44:55',
	printerWidthMM: 58,
	mmFeedPaper: 15,
    text: testo
}
, successF
, errorF
);



}

function SunmisendText(succ, err, testo, size, isBold,isUnderline){

	var s = 1;

	if(size==20){
		s = 1;
	}else if(size==32){
		s = 4;
	}
	
	SunmiV2sendText(
		succ,
		err,
		testo,
		s,
		isBold,
		isUnderline,
		false
		);
	
}

function SunmisendImage(succ, err, b64){

		SunmiV2sendImage(
		succ,
		err,
		b64
		);

			
}
