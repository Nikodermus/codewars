def virtualFriends
    #Step 0
    @social_networks = []

    #Step 1
    @file = File.readlines('./virtual-friends.txt')
    @test_cases = @file[0].to_i

    @line_count = 1
    @new_connections = []
    @results = []

    #Step 2
    for i in 0...@test_cases
        puts ' '
        @new_connections << @file[@line_count].to_i
        @line_count += 1
        @connections = []
        for ind in 0...@new_connections[i]
            @connections << @file[@line_count].downcase.split(' ')
            @line_count += 1
            @friends = 0
            for ind_con in 0...@connections.length
                @first_name = {value: false, ind: 0}
                @second_name = {value: false, ind: 0}
                for ind_sn in 0...@social_networks.length
                    if @social_networks[ind_sn]
                        if @social_networks[ind_sn].include? @connections[ind_con][0]
                            @first_name[:value] = true 
                            @first_name[:ind] = ind_sn 
                        end
                        if @social_networks[ind_sn].include? @connections[ind_con][1]
                            @second_name[:value] = true
                            @second_name[:ind] = ind_sn
                        end
                    end

                  
                end

                if @first_name[:value] and @second_name[:value]
                    puts "Will be destroyed #{@second_name[:ind]} which is #{@social_networks[@second_name[:ind]]}"
                    @social_networks[@first_name[:ind]].concat( @social_networks[@second_name[:ind]])
                    @social_networks[@second_name[:ind]] = nil
                elsif @first_name[:value] and !@second_name[:value]
                    @social_networks[@first_name[:ind]] << @connections[ind_con][1]
                elsif !@first_name[:value] and @second_name[:value]
                    @social_networks[@second_name[:ind]] << @connections[ind_con][0]
                else
                    @social_networks << [@connections[ind_con][0], @connections[ind_con][1]]
                end
               

                # for ind_sn in 0...@social_networks.length 
                #     if @social_networks[ind_sn]
                #         if @social_networks[ind_sn].include? @connections[ind_con][0]
                #             @results << @social_networks[ind_sn].length
                #         end
                #     end
                # end
            end
        end

       
        
    end

    @results
end
puts ' '
print virtualFriends
puts ' '