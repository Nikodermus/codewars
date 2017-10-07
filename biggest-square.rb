def bigestSquare
    # Get file and its content
    @file = File.readlines('./biggest-square.txt')

    #How many areas will be processed
    file_areas = @file[0].to_i

    # Table >> Areas >> Rows
    @table = [];
    file_areas.times do
        @table << []
    end

    #Which line is being processed so far
    @line_count = 0

    #For each area let's do:
    for index in 0..file_areas
        area_size = @file[@line_count + 1].split('')
        area_height = area_size[0]
        area_width = area_size[1]
        @line_count =+ 1
        @matrix = []
        for line_index in 0..area_height
            matrix[line_index] = @file[@line_count]
            @table[] << 
            @line_count =+ 1
        end
        puts area_height, area_width
    end
    
    


    # table.map! do |matrix|
    #     matrix = matrix
    #         .upcase
    #         .gsub(/R/, '0')
    #         .gsub(/F/, '1')
    #         .split(' ')
    #         .map do |element|
    #                 element.split('')
    #         end
    # end
    # puts table
end

bigestSquare